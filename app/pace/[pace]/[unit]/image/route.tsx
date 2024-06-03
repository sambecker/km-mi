import OGImage from '@/components/OGImage';
import { inputLabelForModeUnit } from '@/site/mode';
import {
  ParamsPace,
  convertPaceKmStringToMiString,
  convertPaceMiStringToKmString,
  unitFromString,
} from '@/site/unit';
import { getFonts } from '@/utility/font';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(
  _: Request,
  { params: { pace, unit: unitFromParams } }: ParamsPace,
) {
  const unit = unitFromString(unitFromParams);
  return new ImageResponse(
    <OGImage {...{
      unit,
      valueLeft: unit === 'km' ? pace : convertPaceMiStringToKmString(pace),
      valueRight: unit === 'mi' ? pace : convertPaceKmStringToMiString(pace),
      labelLeft: inputLabelForModeUnit('pace', 'km'),
      labelRight: inputLabelForModeUnit('pace', 'mi'),
    }} />,
    {
      width: 1000,
      height: 600,
      fonts: await getFonts(),
    },
  );
}
