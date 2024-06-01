import ClientContent from '@/components/ClientContent';
import AppStateProvider from '@/state/AppStateProvider';

export default function RacePage() {
  return (
    <AppStateProvider>
      <ClientContent />
    </AppStateProvider>
  );
}
