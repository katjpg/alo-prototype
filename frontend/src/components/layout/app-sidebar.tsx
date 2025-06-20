"use client"

import { cn } from "@/lib/utils"
import { useSidebar } from "@/hooks/use-sidebar"
import { SidebarHeader } from "@/components/sidebar/sidebar-header"
import { SidebarSearch } from "@/components/sidebar/sidebar-search"
import { SidebarContent } from "@/components/sidebar/sidebar-content"
import { SidebarFooter } from "@/components/sidebar/sidebar-footer"
import { SidebarToggle } from "@/components/sidebar/sidebar-toggle"

export function AppSidebar() {
  const { isOpen } = useSidebar()

  return (
    <div
      className={cn(
        "relative bottom-0 left-0 top-0 z-[50] flex h-[100dvh] flex-shrink-0 flex-col border-r border-dashed border-border/50 py-2 transition-all duration-200",
        isOpen
          ? "bg-background border-border/70 shadow-xs w-[240px] border-r"
          : "w-[50px]"
      )}
    >
      <div className="flex w-full flex-1 flex-col overflow-hidden">
        {/* Header Section */}
        <div className="flex w-full flex-col gap-3 px-2">
          <SidebarHeader />
          <SidebarSearch />
        </div>

        {/* Content Section */}
        <div
          className={cn(
            "border-border/70 mt-3 w-full flex-1 overflow-y-auto border-t border-dashed p-3",
            isOpen ? "flex" : "hidden"
          )}
        >
          <SidebarContent />
        </div>

        {/* Footer Section */}
        <div className="mt-auto w-full p-2">
          <div className="flex w-full flex-col gap-2">
            <SidebarToggle />
            <SidebarFooter />
          </div>
        </div>
      </div>
    </div>
  )
}