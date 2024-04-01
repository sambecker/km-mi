import ClientInputs from "@/components/ClientInputs";
import ClientHeader from "@/components/ClientHeader";

export default function Home() {
  return (
    <main>
      <div className="text-8xl font-bold flex w-full items-center justify-center h-[100vh]">
        <div className="translate-y-[-1rem] space-y-4">
          <ClientHeader />
          <ClientInputs />
        </div>
      </div>
    </main>
  );
}
