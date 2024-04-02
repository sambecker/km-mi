import AppStateProvider from '@/state/AppStateProvider';
import ClientContent from '@/components/ClientContent';

export default function Home({
  params: { mi },
}: {
  params: { mi: string }
}) {
  return (
    <AppStateProvider {...{ mi }}>
      <ClientContent />
    </AppStateProvider>
  );
}
