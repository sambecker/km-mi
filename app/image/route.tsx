import OGImage from '@/components/OGImage';
import { inputLabelForModeUnit } from '@/site/mode';
import { getFonts } from '@/utility/font';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    <OGImage
      labelLeft={inputLabelForModeUnit('pace', 'km')}
      labelRight={inputLabelForModeUnit('pace', 'mi')}
    />,
    {
      width: 1000,
      height: 600,
      fonts: await getFonts(),
    },
  );
}
