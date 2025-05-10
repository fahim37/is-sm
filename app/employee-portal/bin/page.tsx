"use client"

import { useState } from "react"
import { FileText, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Dummy data for deleted files
const deletedFiles = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: "File name",
  originalLocation: "Completed project",
  dateDeleted: "29 Dec 2024",
}))

export default function BinPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalItems = 100

  // Filter files based on search query
  const filteredFiles = deletedFiles.filter((file) => file.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const renderPagination = () => {
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const pages = []

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
      >
        &lt;
      </button>,
    )

    // Page 1
    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
          currentPage === 1 ? "bg-black text-white" : "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
        }`}
      >
        1
      </button>,
    )

    // Page 2
    pages.push(
      <button
        key={2}
        onClick={() => handlePageChange(2)}
        className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
          currentPage === 2 ? "bg-black text-white" : "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
        }`}
      >
        2
      </button>,
    )

    // Page 3
    pages.push(
      <button
        key={3}
        onClick={() => handlePageChange(3)}
        className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
          currentPage === 3 ? "bg-black text-white" : "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
        }`}
      >
        3
      </button>,
    )

    // Ellipsis
    pages.push(
      <span key="ellipsis" className="flex h-8 w-8 items-center justify-center text-gray-500">
        ...
      </span>,
    )

    // Page 17
    pages.push(
      <button
        key={17}
        onClick={() => handlePageChange(17)}
        className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
          currentPage === 17 ? "bg-black text-white" : "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
        }`}
      >
        17
      </button>,
    )

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
      >
        &gt;
      </button>,
    )

    return pages
  }

  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-gray-100 p-4">
        <h1 className="text-center text-2xl font-bold">Bin</h1>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search files..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <div className="grid grid-cols-4 gap-4 bg-gray-100 p-4 font-medium">
          <div>Name</div>
          <div>Original Location</div>
          <div>Date Deleted</div>
          <div>Action</div>
        </div>

        {filteredFiles.map((file) => (
          <div key={file.id} className="grid grid-cols-4 gap-4 border-t border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-gray-400" />
              {file.name}
            </div>
            <div>{file.originalLocation}</div>
            <div>{file.dateDeleted}</div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Restore</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-500">Delete Permanently</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">Showing 1-10 from 100</div>
        <div className="flex items-center space-x-2">{renderPagination()}</div>
      </div>
    </div>
  )
}
