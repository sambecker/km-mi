import AppUnits from './AppUnits';
import AppInputs from './AppInputs';

export default function AppContent() {
  return (
    <div className="flex flex-col gap-2">
      <AppUnits />
      <AppInputs />
    </div>
  );
}
