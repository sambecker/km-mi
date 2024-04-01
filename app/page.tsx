'use client';

import ClientInputs from "@/components/ClientInputs";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const isKm = Boolean(searchParams.get('km'));
  const isMi = Boolean(searchParams.get('mi'));
  return (
    <main>
      <div className="text-8xl font-bold flex w-full items-center justify-center h-[100vh]">
        <div className="translate-y-[-1rem] space-y-4">
          <div>
            <span className={!isKm ? 'opacity-10' : undefined}>
              KM
            </span>
            /
            <span className={!isMi ? 'opacity-10' : undefined}>
              MI
            </span>
          </div>
          <ClientInputs />
        </div>
      </div>
    </main>
  );
}
