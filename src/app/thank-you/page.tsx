import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <>
      <img
        className="absolute -z-10 top-0 w-full lg:hidden"
        src="bg-sidebar-mobile.svg"
        alt="Abstract background"
      />
      <Sidebar />
      <div className="min-w-80 m-4 bg-white p-4 py-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:w-[940px] lg:m-auto lg:flex lg:gap-24 lg:relative lg:p-6">
        <img
          className="hidden lg:block"
          src="bg-sidebar-desktop.svg"
          alt="Abstract background"
        />
        <div className="lg:box-border lg:relative lg:w-full lg:mr-24">
          <div className="flex flex-col items-center justify-center gap-4 py-16 lg:h-full">
            <img
              className="w-12 h-12 lg:w-20 lg:h-20"
              src="icon-thank-you.svg"
              alt="Checkmark on pink background"
            />
            <div className="text-2xl font-bold text-marine-blue lg:text-3xl">
              Thank you!
            </div>
            <div className="text-center text-cool-gray m-auto lg:m-0">
              <div>Thanks for confirming your subscription!</div>
              <div className="px-4">
                We hope you have fun using our platform. If you ever need
                support, please feel free to email us at
                support@loremgaming.com.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
