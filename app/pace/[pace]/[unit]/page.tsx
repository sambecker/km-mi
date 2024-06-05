import { ParamsPace } from '@/site/unit';
import { Metadata } from 'next';
import { getMeta } from '@/site/meta';

export function generateMetadata({
  params: { pace, unit },
}: ParamsPace): Metadata {
  return getMeta('pace', pace, unit);
}

export default function KmPage() {
  return null;
}
