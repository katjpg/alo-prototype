"use client"

import { IconPlus } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export function SidebarHeader() {
  return (
    <div className="p-4 border-b">
      <Button className="w-full justify-start" variant="ghost">
        <IconPlus className="mr-2 h-4 w-4" />
        New Discovery
      </Button>
    </div>
  )
}