import { ActiveStepForm } from '@/components/ActiveStepForm';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <>
      <img
        className="absolute -z-10 top-0"
        src="bg-sidebar-mobile.svg"
        alt="Abstract background"
      />
      <Sidebar />
      <div className="w-80 bg-white m-auto p-4 py-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <ActiveStepForm />
      </div>
    </>
  );
}
