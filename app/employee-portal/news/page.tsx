"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Dummy data for news
const newsData = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  excerpt: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
  date: "12 Dec 2025",
  author: "Admin",
  views: 12,
  image: "/business-newspaper.png",
}))

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const totalItems = 100

  // Filter news based on search query
  const filteredNews = newsData.filter((news) => news.title.toLowerCase().includes(searchQuery.toLowerCase()))

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
        <h1 className="text-center text-2xl font-bold">News</h1>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search by title..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Button variant="outline" size="sm">
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredNews.map((news) => (
          <div key={news.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="relative h-48 w-full overflow-hidden">
              <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
              <div className="absolute top-2 left-2 rounded bg-gray-800 px-2 py-1 text-xs text-white">{news.date}</div>
            </div>
            <div className="p-4">
              <div className="mb-2 text-xs text-gray-500">
                {news.author} | {news.views} Views
              </div>
              <h3 className="mb-2 text-lg font-semibold">{news.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{news.excerpt}</p>
              <Link
                href={`/employee-portal/news/${news.id}`}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-black"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center">
        <div className="flex items-center space-x-2">{renderPagination()}</div>
      </div>
    </div>
  )
}
