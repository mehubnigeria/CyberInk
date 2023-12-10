import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "../globals.css";
import LeftSidebar from "@/components/dashbord/LeftSidebar";
import Topbar from "@/components/dashbord/TopBar";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeHub Inhouse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
      <html lang='en'>
          <body className={inter.className}>
            <Topbar />
            {/* <Header /> */}
            <main className='flex flex-row h-fit'>
              <LeftSidebar />
              <section className='main-container'>
                <div className='w-full '>{children}</div>
              </section>
            </main>
          </body>
      </html>
  );
}
