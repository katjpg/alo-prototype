"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SidebarState {
  isOpen: boolean
  toggle: () => void
  setIsOpen: (open: boolean) => void
}

export const useSidebarState = create<SidebarState>()(
  persist(
    (set) => ({
      isOpen: true,
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      setIsOpen: (open: boolean) => set({ isOpen: open }),
    }),
    {
      name: 'alo-sidebar-state',
    }
  )
)