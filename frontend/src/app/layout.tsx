import type { Metadata } from "next"
import "../styles/globals.css"
import { AppSidebar } from "@/components/layout/app-sidebar"

export const metadata: Metadata = {
  title: "ALO - AI-based Ligand Optimization",
  description: "Human-AI Collaborative Scientific Discovery Support Tool",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="flex min-h-screen">
          <AppSidebar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}