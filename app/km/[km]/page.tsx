import ClientInputs from '@/components/ClientInputs';
import ClientHeader from '@/components/ClientHeader';
import AppStateProvider from '@/state/AppStateProvider';

export default function Home({
  params: { km },
}: {
  params: { km: string }
}) {
  return (
    <AppStateProvider {...{ km }}>
      <ClientHeader />
      <ClientInputs />
    </AppStateProvider>
  );
}
