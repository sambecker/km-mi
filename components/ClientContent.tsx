import ClientHeader from './ClientHeader';
import ClientInputs from './ClientInputs';

export default function ClientContent() {
  return (
    <div className="flex flex-col gap-2">
      <ClientHeader />
      <ClientInputs />
    </div>
  );
}
