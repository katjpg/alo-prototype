"use client"

import { IconPlus } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/hooks/use-sidebar"
import { cn } from "@/lib/utils"

export function SidebarHeader() {
  const { isOpen } = useSidebar()

  return (
    <Button
      size={isOpen ? "sm" : "icon"}
      variant="outline"
      className={cn(
        "relative w-full shadow-sm rounded-full border-border",
        "justify-center"
      )}
    >
      <IconPlus
        size={16}
        strokeWidth={2}
        className={cn(isOpen && "absolute left-2")}
      />
      {isOpen && "New Discovery"}
    </Button>
  )
}