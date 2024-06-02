import ClientContent from '@/components/ClientContent';
import { ParamsPace, unitFromString } from '@/site/unit';
import { Metadata } from 'next';
import { getMeta } from '@/site/meta';

export function generateMetadata({
  params: { pace, unit },
}: ParamsPace): Metadata {
  return getMeta('pace', pace, unitFromString(unit));
}

export default function KmPage() {
  return (
    <ClientContent />
  );
}
