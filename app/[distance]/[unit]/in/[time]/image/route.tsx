import OGImage from '@/components/OGImage';
import {
  ParamsRace,
  convertDistanceKmStringToMiString,
  convertDistanceMiStringToKmString,
  getPaceWithUnit,
  unitFromString,
} from '@/site/unit';
import { getFonts } from '@/utility/font';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(
  _: Request,
  { params: {
    distance,
    unit: unitFromParams,
    time: timeFromParams,
  } }: ParamsRace,
) {
  const unit = unitFromString(unitFromParams);
  const time = decodeURIComponent(timeFromParams);
  const distanceConverted = unit === 'km'
    ? convertDistanceKmStringToMiString(distance)
    : convertDistanceMiStringToKmString(distance);
  const pace = getPaceWithUnit(distance, time, unit);
  const paceConverted = getPaceWithUnit(
    distanceConverted,
    time,
    unit === 'km' ? 'mi' : 'km', 
  );
  return new ImageResponse(
    <OGImage {...{
      unit,
      valueLeft: unit === 'km' ? distance : distanceConverted,
      valueRight: unit === 'km' ? distanceConverted : distance,
      labelLeft:  unit === 'km' ? pace : paceConverted,
      labelRight: unit === 'km' ? paceConverted : pace,
      ...unit === 'km'
        ? { timeBadgeRight: time }
        : { timeBadgeLeft: time },
    }} />,
    {
      width: 1000,
      height: 600,
      fonts: await getFonts(),
    },
  );
}
