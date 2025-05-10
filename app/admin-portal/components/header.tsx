"use client"

import Image from "next/image"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <div className="border border-gray-200 p-2">
            <Image src="/admin-portal/logo.png" alt="Nyce Renos" width={60} height={30} priority />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Mr. Raja</span>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/admin-portal/avatar.png" alt="Mr. Raja" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
