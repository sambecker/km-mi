import OGImage from '@/components/OGImage';
import { MiParams, convertMiStringToKmString } from '@/site/unit';
import { getFonts } from '@/utility/font';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(
  _: Request,
  { params: { mi } }: MiParams,
) {
  return new ImageResponse(
    <OGImage {...{
      unit: 'mi',
      values: { mi, km: convertMiStringToKmString(mi) },
    }} />,
    {
      width: 1000,
      height: 600,
      fonts: await getFonts(),
    },
  );
}
