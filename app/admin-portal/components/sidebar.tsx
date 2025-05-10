"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, UserCircle, FileText, Trash2, LogOut } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === `/admin-portal${path}`
  }

  const navItems = [
    { name: "Home", path: "", icon: Home },
    { name: "Employee", path: "/employee", icon: UserCircle },
    { name: "Leads", path: "/leads", icon: Users },
    { name: "News", path: "/news", icon: FileText },
    { name: "Bin", path: "/bin", icon: Trash2 },
  ]

  return (
    <div className="flex w-20 flex-col border-r bg-white">
      {navItems.map((item) => {
        const Icon = item.icon
        const active = isActive(item.path)
        return (
          <Link
            key={item.name}
            href={`/admin-portal${item.path}`}
            className={`flex flex-col items-center justify-center py-4 px-2 text-xs ${
              active ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center">
              <Icon className="h-5 w-5" />
            </div>
            <span className="mt-1">{item.name}</span>
          </Link>
        )
      })}
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
