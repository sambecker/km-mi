import ClientInputs from '@/components/ClientInputs';
import ClientHeader from '@/components/ClientHeader';
import { Suspense } from 'react';
import { twMerge } from 'tailwind-merge';
import AppStateProvider from '@/state/AppStateProvider';
import AppStateInitializer from '@/state/AppStateInitializer';

export default function Home() {
  return (
    <AppStateProvider>
      <Suspense>
        <AppStateInitializer />
      </Suspense>
      <main>
        <div className={twMerge(
          'flex w-full items-center justify-center h-[100vh]',
          'text-8xl font-bold',
        )}>
          <div className="translate-y-[-1rem] space-y-4">
            <Suspense>
              <ClientHeader />
              <ClientInputs />
            </Suspense>
          </div>
        </div>
      </main>
    </AppStateProvider>
  );
}
