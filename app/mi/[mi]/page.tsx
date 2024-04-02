import ClientInputs from '@/components/ClientInputs';
import ClientHeader from '@/components/ClientHeader';
import AppStateProvider from '@/state/AppStateProvider';

export default function Home({
  params: { mi },
}: {
  params: { mi: string }
}) {
  return (
    <AppStateProvider {...{ mi }}>
      <ClientHeader />
      <ClientInputs />
    </AppStateProvider>
  );
}
