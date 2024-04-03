import AppStateProvider from '@/state/AppStateProvider';
import ClientContent from '@/components/ClientContent';
import { KmParams } from '@/unit';
import { Metadata } from 'next';
import { metaForUnit } from '@/meta';

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
