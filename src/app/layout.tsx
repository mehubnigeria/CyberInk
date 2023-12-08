import './global.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';


import { Toaster } from '@/components/ui/toaster';
import NavBar from '@/components/NavBar';



const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cyber ink',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang='en'>
      <body className={`${outfit.className}`}>

            <main className='flex min-h-screen flex-col items-center'>
              <NavBar />
              {children}
            </main>
            <Toaster />

      </body>
    </html>
  );
}
