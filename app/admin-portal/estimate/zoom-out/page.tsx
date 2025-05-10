"use client"

import { Search } from "lucide-react"

export default function ZoomOutPage() {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gray-100">
        <Search className="h-10 w-10 text-gray-500" />
        <span className="mt-2 text-center text-sm text-gray-500">Zoom Out View</span>
      </div>
    </div>
  )
}
