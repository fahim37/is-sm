"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage?: number
  onPageChange?: (page: number) => void
}

export function Pagination({ totalItems, itemsPerPage, currentPage = 1, onPageChange }: PaginationProps) {
  const [page, setPage] = useState(currentPage)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage)
      onPageChange?.(newPage)
    }
  }

  const renderPageNumbers = () => {
    const pages = []

    // Always show first page
    pages.push(
      <Button
        key={1}
        variant={page === 1 ? "default" : "outline"}
        size="icon"
        className={`h-8 w-8 ${page === 1 ? "bg-black text-white" : ""}`}
        onClick={() => handlePageChange(1)}
      >
        1
      </Button>,
    )

    // Show ellipsis if needed
    if (page > 3) {
      pages.push(
        <Button key="ellipsis1" variant="outline" size="icon" className="h-8 w-8" disabled>
          <MoreHorizontal className="h-4 w-4" />
        </Button>,
      )
    }

    // Show current page and surrounding pages
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      if (i === 1 || i === totalPages) continue // Skip first and last page as they're always shown
      pages.push(
        <Button
          key={i}
          variant={page === i ? "default" : "outline"}
          size="icon"
          className={`h-8 w-8 ${page === i ? "bg-black text-white" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>,
      )
    }

    // Show ellipsis if needed
    if (page < totalPages - 2) {
      pages.push(
        <Button key="ellipsis2" variant="outline" size="icon" className="h-8 w-8" disabled>
          <MoreHorizontal className="h-4 w-4" />
        </Button>,
      )
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pages.push(
        <Button
          key={totalPages}
          variant={page === totalPages ? "default" : "outline"}
          size="icon"
          className={`h-8 w-8 ${page === totalPages ? "bg-black text-white" : ""}`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Button>,
      )
    }

    return pages
  }

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-500">
        Showing 1-{Math.min(itemsPerPage, totalItems)} from {totalItems}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {renderPageNumbers()}
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
