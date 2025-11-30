"use client";
import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center w-full  h-14 shrink-0  gap-2 border-b px-4">
      <div className="flex items-center gap-2 ">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        navbar
      </div>
      <div>
        <UserButton />
      </div>
    </header>
  );
}
