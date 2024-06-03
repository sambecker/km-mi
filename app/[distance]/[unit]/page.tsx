import { getMeta } from '@/site/meta';
import { ParamsDistance, unitFromString } from '@/site/unit';
import { Metadata } from 'next';

export function generateMetadata({
  params: { distance, unit },
}: ParamsDistance): Metadata {
  return getMeta('distance', distance, unitFromString(unit));
}

export default function DistancePage() {
  return null;
}
