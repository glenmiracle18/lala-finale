import type { Metadata } from "next";

import { cookies } from "next/headers";
import { SidebarProvider } from "../../components/ui/sidebar";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
      <SidebarProvider defaultOpen={defaultOpen}>
        <div
          className="antialiased"
        >
        <Header />
        <div className="p-8">
        {children}
        </div>
      </div>
    </ SidebarProvider>
  );
}
