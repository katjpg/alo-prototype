"use client"

import { IconSearch } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"

export function SidebarSearch() {
  return (
    <div className="p-4">
      <div className="relative">
        <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-9"
        />
      </div>
    </div>
  )
}