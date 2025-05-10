import type React from "react"
import { Inter } from "next/font/google"
import Header from "../admin-portal/components/header"
import EstimateSidebar from "./components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nyce Renos - Estimate Portal",
  description: "Estimate portal for Nyce Renos",
}

export default function EstimateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1">
          <EstimateSidebar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
}
