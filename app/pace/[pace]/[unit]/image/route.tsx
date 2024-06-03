import OGImage from '@/components/OGImage';
import { KmParams, convertPaceKmStringToMiString } from '@/site/unit';
import { getFonts } from '@/utility/font';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(
  _: Request,
  { params: { km } }: KmParams,
) {
  return new ImageResponse(
    <OGImage {...{
      unit: 'km',
      values: { km, mi: convertPaceKmStringToMiString(km) },
    }} />,
    {
      width: 1000,
      height: 600,
      fonts: await getFonts(),
    },
  );
}