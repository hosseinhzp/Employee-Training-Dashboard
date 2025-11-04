import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";
import AppSideBar from "@/components/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AceDesign | Dashboard Design",
  description: "Admin dashboard built with Next.js",
};

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const _defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`} suppressHydrationWarning={true}>
      <SidebarProvider>
        <AppSideBar />
        <main className="w-full min-h-screen flex flex-col">
          <NavBar />
          <div className="px-4 pb-8">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
