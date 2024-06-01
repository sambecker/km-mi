import ClientContent from '@/components/ClientContent';
import AppStateProvider from '@/state/AppStateProvider';

export default function DistancePage() {
  return (
    <AppStateProvider>
      <ClientContent />
    </AppStateProvider>
  );
}
