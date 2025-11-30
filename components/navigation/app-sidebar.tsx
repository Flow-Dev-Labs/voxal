"use client";

import {
  Command,
  DiscAlbum,
  House,
  LifeBuoy,
  NotebookTabs,
  PlusIcon,
  Send,
} from "lucide-react";
import * as React from "react";
import { NavMain } from "@/components/navigation/nav-main";
import { NavSecondary } from "@/components/navigation/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const isDarkMode = theme === "dark";
  const { state, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: House,
        isActive: pathname === "/dashboard",
      },
      {
        title: "Recordings",
        url: "/dashboard/recordings",
        icon: DiscAlbum,
        isActive: pathname.startsWith("/dashboard/recordings"),
      },
      {
        title: "Notebooks",
        url: "/dashboard/notebooks",
        icon: NotebookTabs,
        isActive: pathname.startsWith("/dashboard/notebooks"),
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "/support",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "/feedback",
        icon: Send,
      },
    ],
  };
  return (
    <Sidebar variant="sidebar" collapsible="icon" {...props}>
      <SidebarHeader>
        <Link
          href="/dashboard"
          className={cn(
            "flex w-full cursor-pointer items-center justify-start gap-2 pt-1 transition-all duration-200 hover:opacity-80",
            isCollapsed ? "px-0" : "px-1"
          )}
        >
          <motion.div
            animate={{
              width: isCollapsed ? 26 : 24,
              height: isCollapsed ? 26 : 24,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative flex-shrink-0"
          >
            <Image
              src={
                mounted && isDarkMode
                  ? "/logo/logo_lightmode_v1.png"
                  : "/logo/logo_lightmode_v1.png"
              }
              alt="voxal Logo"
              fill
              sizes="(max-width: 768px) 60px, 22px"
              className={`object-contain`}
            />
          </motion.div>
          <motion.div
            initial={false}
            animate={{
              opacity: isCollapsed ? 0 : 1,
              width: isCollapsed ? 0 : "auto",
              marginLeft: isCollapsed ? 0 : 2,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center gap-0.5 overflow-hidden whitespace-nowrap"
          >
            <h3 className="text-lg font-bold capitalize text-sidebar-foreground">
              Voxal <span className="text-sidebar-foreground">App</span>
            </h3>
          </motion.div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <div className="px-2 pt-3">
          <Button
            className="flex items-center gap-2 w-full cursor-pointer"
            onClick={() =>
              router.push("/dashboard/recordings/new?source=sidebar")
            }
          >
            <PlusIcon className="size-4" /> {!isCollapsed && "New Recording"}
          </Button>
        </div>
        <NavMain items={data.navMain} />
        <span>recent recordings later</span>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
    </Sidebar>
  );
}
