import AppHeader from './AppHeader';
import AppInputs from './AppInputs';

export default function AppContent() {
  return (
    <div className="flex flex-col gap-2">
      <AppHeader />
      <AppInputs />
    </div>
  );
}
