"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, Search, LogOut } from "lucide-react"

export default function EstimateSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === `/admin-portal/estimate${path}`
  }

  return (
    <div className="flex w-20 flex-col border-r bg-white">
      <Link
        href="/admin-portal/estimate"
        className={`flex flex-col items-center justify-center py-4 px-2 text-xs ${
          isActive("") ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <div className="flex h-10 w-10 items-center justify-center">
          <Users className="h-5 w-5" />
        </div>
        <span className="mt-1">Estimate</span>
      </Link>

      <Link
        href="/admin-portal/estimate/zoom-out"
        className={`flex flex-col items-center justify-center py-4 px-2 text-xs ${
          isActive("/zoom-out") ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <div className="flex h-10 w-10 items-center justify-center">
          <Search className="h-5 w-5" />
        </div>
        <span className="mt-1 text-center">Zoom Out View</span>
      </Link>

      <Link
        href="/admin-portal/estimate/zoom-in"
        className={`flex flex-col items-center justify-center py-4 px-2 text-xs ${
          isActive("/zoom-in") ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <div className="flex h-10 w-10 items-center justify-center">
          <Search className="h-5 w-5 transform scale-[1.2]" />
        </div>
        <span className="mt-1 text-center">Zoom In View</span>
      </Link>

      <div className="mt-auto">
        <Link
          href="/admin-portal/logout"
          className="flex flex-col items-center justify-center py-4 px-2 text-xs text-gray-700 hover:bg-gray-100"
        >
          <div className="flex h-10 w-10 items-center justify-center">
            <LogOut className="h-5 w-5" />
          </div>
          <span className="mt-1">Logout</span>
        </Link>
      </div>
    </div>
  )
}
