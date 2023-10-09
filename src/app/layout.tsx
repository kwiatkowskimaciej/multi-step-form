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
      <body className={ubuntu.className + ' bg-magnolia'}>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
