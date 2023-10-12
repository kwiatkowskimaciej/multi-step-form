import { FormProvider } from '@/providers/FormContext';
import './globals.css';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import 'material-symbols';

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Multi-step form',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          ubuntu.className +
          ' bg-magnolia lg:h-[100dvh] lg:w-full lg:flex lg:items-center lg:justify-center'
        }
      >
        <div>
          <FormProvider>{children}</FormProvider>
        </div>
      </body>
    </html>
  );
}
