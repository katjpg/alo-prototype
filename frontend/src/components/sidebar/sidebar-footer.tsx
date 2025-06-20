"use client"

import { IconSettings } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export function SidebarFooter() {
  return (
    <div className="p-4 border-t">
      <Button variant="ghost" size="sm" className="w-full justify-start">
        <IconSettings className="mr-2 h-4 w-4" />
        Settings
      </Button>
    </div>
  )
}