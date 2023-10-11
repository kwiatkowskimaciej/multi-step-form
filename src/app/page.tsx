import { ActiveStepForm } from '@/components/ActiveStepForm';
import { Sidebar } from '@/components/Sidebar';
import { StepsNavigation } from '@/components/StepsNavigation';

export default function Home() {
  return (
    <>
      <img
        className="absolute -z-10 top-0 w-full lg:hidden"
        src="bg-sidebar-mobile.svg"
        alt="Abstract background"
      />
      <Sidebar />
      <div className="min-w-80 m-4 bg-white p-4 py-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:w-[940px] lg:m-auto lg:flex lg:gap-24 lg:relative">
        <img
          className="hidden lg:block lg:z-10"
          src="bg-sidebar-desktop.svg"
          alt="Abstract background"
        />
        <div>
          <ActiveStepForm />
        </div>
      </div>
    </>
  );
}
