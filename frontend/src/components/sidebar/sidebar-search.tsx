"use client"

import { IconSearch } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/hooks/use-sidebar"
import { cn } from "@/lib/utils"

export function SidebarSearch() {
  const { isOpen } = useSidebar()

  return (
    <Button
      size={isOpen ? "sm" : "icon"}
      variant="secondary"
      className={cn(
        "relative w-full rounded-full",
        "justify-center"
      )}
    >
      <IconSearch
        size={16}
        strokeWidth={2}
        className={cn(isOpen && "absolute left-2")}
      />
      {isOpen && "Search"}
    </Button>
  )
}