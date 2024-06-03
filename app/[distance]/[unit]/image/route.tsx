import OGImage from '@/components/OGImage';
import { inputLabelForModeUnit } from '@/site/mode';
import {
  ParamsDistance,
  convertDistanceKmStringToMiString,
  convertDistanceMiStringToKmString,
  unitFromString,
} from '@/site/unit';
import { getFonts } from '@/utility/font';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(
  _: Request,
  { params: { distance, unit: unitFromParams } }: ParamsDistance,
) {
  const unit = unitFromString(unitFromParams);
  return new ImageResponse(
    <OGImage {...{
      unit,
      valueLeft: unit === 'km'
        ? distance
        : convertDistanceMiStringToKmString(distance),
      valueRight: unit === 'mi'
        ? distance
        : convertDistanceKmStringToMiString(distance),
      labelLeft: inputLabelForModeUnit('distance', 'km'),
      labelRight: inputLabelForModeUnit('distance', 'mi'),
    }} />,
    {
      width: 1000,
      height: 600,
      fonts: await getFonts(),
    },
  );
}
