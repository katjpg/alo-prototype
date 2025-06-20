"use client"

import { IconArrowBarLeft, IconArrowBarRight } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/hooks/use-sidebar"
import { cn } from "@/lib/utils"

export function SidebarToggle() {
  const { isOpen, toggle } = useSidebar()

  if (isOpen) {
    return (
      <div className="flex w-full items-center justify-between px-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggle}
          className="w-full justify-start"
        >
          <IconArrowBarLeft size={16} strokeWidth={2} />
          <span className="ml-2">Close</span>
        </Button>
      </div>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="mx-auto"
    >
      <IconArrowBarRight size={16} strokeWidth={2} />
    </Button>
  )
}