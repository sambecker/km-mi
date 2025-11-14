import OGImage from '@/components/OGImage';
import { inputLabelForModeUnit } from '@/site/mode';
import {
  ParamsDistance,
  convertDistanceKmStringToMiString,
  convertDistanceMiStringToKmString,
  unitFromString,
} from '@/site/unit';
import { getFonts, listFonts, listPublic, listRoot } from '@/utility/font';
import { ImageResponse } from 'next/og';

export async function GET(
  _: Request,
  { params }: ParamsDistance,
) {
  const { distance, unit: unitFromParams } = await params;
  const unit = unitFromString(unitFromParams);
  console.log('Listing root');
  await listRoot();
  console.log('Listing public');
  await listPublic();
  console.log('Listing fonts');
  await listFonts();
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
