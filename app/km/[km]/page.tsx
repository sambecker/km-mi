import AppStateProvider from '@/state/AppStateProvider';
import ClientContent from '@/components/ClientContent';
import { KmParams } from '@/site/unit';
import { Metadata } from 'next';
import { metaForUnit } from '@/site/meta';

export function generateMetadata({
  params: { km },
}: KmParams): Metadata {
  return metaForUnit('km', km);
}

export default function KmPage({
  params: { km },
}: KmParams) {
  return (
    <AppStateProvider {...{ km: decodeURIComponent(km) }}>
      <ClientContent />
    </AppStateProvider>
  );
}
