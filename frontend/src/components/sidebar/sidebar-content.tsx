"use client"

import { IconPin } from "@tabler/icons-react"

export function SidebarContent() {
  return (
    <div className="flex-1 p-4">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <IconPin className="h-4 w-4" />
          Pinned
        </div>
        <div className="text-sm text-muted-foreground pl-6">
          No pinned sessions
        </div>
      </div>
    </div>
  )
}