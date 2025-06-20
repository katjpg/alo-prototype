"use client"

import {
  Sidebar,
  SidebarContent as SidebarContentWrapper,
  SidebarFooter as SidebarFooterWrapper,
  SidebarHeader as SidebarHeaderWrapper,
} from "@/components/ui/sidebar"
import { SidebarHeader } from "@/components/sidebar/sidebar-header"
import { SidebarSearch } from "@/components/sidebar/sidebar-search"
import { SidebarContent } from "@/components/sidebar/sidebar-content"
import { SidebarFooter } from "@/components/sidebar/sidebar-footer"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeaderWrapper>
        <SidebarHeader />
        <SidebarSearch />
      </SidebarHeaderWrapper>
      
      <SidebarContentWrapper>
        <SidebarContent />
      </SidebarContentWrapper>
      
      <SidebarFooterWrapper>
        <SidebarFooter />
      </SidebarFooterWrapper>
    </Sidebar>
  )
}