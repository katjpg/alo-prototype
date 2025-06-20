"use client"

import { IconPin } from "@tabler/icons-react"

export function SidebarContent() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <IconPin className="h-4 w-4" />
        Pinned
      </div>
      <div className="border-border/50 w-full gap-0.5 border-l pl-2">
        <div className="text-xs text-muted-foreground">
          No pinned sessions
        </div>
      </div>
    </div>
  )
}