import ClientContent from '@/components/ClientContent';
import AppStateProvider from '@/state/AppStateProvider';

export default function Home() {
  return (
    <AppStateProvider>
      <ClientContent />
    </AppStateProvider>
  );
}
