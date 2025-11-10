import { ParamsPace } from '@/site/unit';
import { Metadata } from 'next';
import { getMeta } from '@/site/meta';

export async function generateMetadata({
  params,
}: ParamsPace): Promise<Metadata> {
  const { pace, unit } = await params;
  return getMeta('pace', pace, unit);
}

export default function KmPage() {
  return null;
}
