import AppStateProvider from '@/state/AppStateProvider';
import ClientContent from '@/components/ClientContent';

export default function Home({
  params: { km },
}: {
  params: { km: string }
}) {
  return (
    <AppStateProvider {...{ km }}>
      <ClientContent />
    </AppStateProvider>
  );
}
