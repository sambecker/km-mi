import AppStateProvider from '@/state/AppStateProvider';
import ClientContent from '@/components/ClientContent';
import { MiParams } from '@/unit';
import { Metadata } from 'next';
import { metaForUnit } from '@/meta';

export function generateMetadata({
  params: { mi },
}: MiParams): Metadata {
  return metaForUnit('mi', mi);
}

export default function MiPage({
  params: { mi },
}: MiParams) {
  return (
    <AppStateProvider {...{ mi: decodeURIComponent(mi) }}>
      <ClientContent />
    </AppStateProvider>
  );
}
