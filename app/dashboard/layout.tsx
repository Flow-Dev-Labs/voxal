import { AppSidebar } from "@/components/navigation/app-sidebar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import NavBar from "@/components/navigation/nav-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    redirect("/sign-in");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <NavBar />
        <div className="p-4 w-full h-full flex-1">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
