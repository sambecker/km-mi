import { getMeta } from '@/site/meta';
import { ParamsRace } from '@/site/unit';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: ParamsRace): Promise<Metadata> {
  const { distance, unit, time } = await params;
  return getMeta('race', distance, unit, time);
}

export default function TimePage() {
  return null;
}
