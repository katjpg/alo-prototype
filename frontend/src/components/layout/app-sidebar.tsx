"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar'
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { IconPlus, IconAtom } from '@tabler/icons-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { HistorySection } from '@/components/sidebar/history-section'
import { HistorySkeleton } from '@/components/sidebar/history-skeleton'

export function AppSidebar() {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  return (
    <TooltipProvider>
      <Sidebar side="left" variant="sidebar" collapsible="icon">
        <SidebarHeader className="flex flex-row justify-between items-center">
          {isCollapsed ? (
            <div className="flex items-center justify-center w-full py-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/" className="flex items-center justify-center">
                    <IconAtom className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>ALO - AI-based Ligand Optimization</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ) : (
            <>
              <Link href="/" className="flex items-center gap-2 px-2 py-3">
                <IconAtom className="size-5" />
                <span className="font-semibold text-sm">ALO</span>
              </Link>
              <SidebarTrigger />
            </>
          )}
        </SidebarHeader>
        <SidebarContent className="flex flex-col px-2 py-4 h-full">
          <SidebarMenu>
            <SidebarMenuItem>
              {isCollapsed ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href="/" className="flex items-center justify-center">
                        <IconPlus className="size-4" />
                      </Link>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>New Discovery</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <SidebarMenuButton asChild>
                  <Link href="/" className="flex items-center gap-2">
                    <IconPlus className="size-4" />
                    <span>New Discovery</span>
                  </Link>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          </SidebarMenu>
          {!isCollapsed && (
            <div className="flex-1 overflow-y-auto">
              <Suspense fallback={<HistorySkeleton />}>
                <HistorySection />
              </Suspense>
            </div>
          )}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </TooltipProvider>
  )
}