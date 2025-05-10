import type React from "react"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import Sidebar from "./components/sidebar"
import Header from "./components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nyce Renos - Admin Portal",
  description: "Admin portal for Nyce Renos",
}

export default function AdminPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </div>
  )
}
