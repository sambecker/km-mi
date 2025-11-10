import { getMeta } from '@/site/meta';
import { ParamsDistance, unitFromString } from '@/site/unit';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: ParamsDistance): Promise<Metadata> {
  const { distance, unit } = await params;
  return getMeta('distance', distance, unitFromString(unit));
}

export default function DistancePage() {
  return null;
}
