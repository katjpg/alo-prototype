"use client"

import { IconSettings } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/hooks/use-sidebar"
import { cn } from "@/lib/utils"

export function SidebarFooter() {
  const { isOpen } = useSidebar()

  if (!isOpen) {
    return null
  }

  return (
    <div className="w-full border-t border-dashed border-border/50 pt-2">
      <Button 
        variant="ghost" 
        size="sm" 
        className="w-full justify-start px-2"
      >
        <IconSettings className="mr-2 h-4 w-4" />
        Settings
      </Button>
    </div>
  )
}