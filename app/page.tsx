import ClientInputs from '@/components/ClientInputs';
import ClientHeader from '@/components/ClientHeader';
import AppStateProvider from '@/state/AppStateProvider';

export default function Home() {
  return (
    <AppStateProvider>
      <ClientHeader />
      <ClientInputs />
    </AppStateProvider>
  );
}
