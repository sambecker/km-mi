import AppStateProvider from '@/state/AppStateProvider';
import ClientContent from '@/components/ClientContent';

export default function Home() {
  return (
    <AppStateProvider>
      <ClientContent />
    </AppStateProvider>
  );
}
