import { getMeta } from '@/site/meta';
import { ParamsRace } from '@/site/unit';
import { Metadata } from 'next';

export function generateMetadata({
  params: { distance, unit, time },
}: ParamsRace): Metadata {
  return getMeta('race', distance, unit, time);
}

export default function TimePage() {
  return null;
}
