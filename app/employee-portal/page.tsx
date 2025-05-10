"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dummy data for leads
const leadsData = Array.from({ length: 10 }, (_, i) => ({
  id: (i + 1).toString().padStart(2, "0"),
  clientName: "Sharma",
  address: "13th Street, 47 W 13th St, New York",
  scopeOfWork: "Design",
  visitingDate: "29 Dec 2026",
  assign: "Mr. Raja",
}))

export default function EmployeePortalPage() {
  const [activeTab, setActiveTab] = useState("leads")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalItems = 100

  // Filter leads based on search query
  const filteredLeads = leadsData.filter(
    (lead) => lead.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || lead.id.includes(searchQuery),
  )

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
      <Tabs defaultValue="leads" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-4 flex w-full space-x-2 bg-transparent p-0">
          <TabsTrigger
            value="leads"
            className={`flex items-center gap-2 rounded-md border border-gray-200 bg-white py-2 px-4 ${
              activeTab === "leads" ? "border-gray-300 font-medium" : ""
            }`}
          >
            <Users className="h-4 w-4" />
            Leads List
          </TabsTrigger>
          <TabsTrigger
            value="estimates"
            className={`flex items-center gap-2 rounded-md border border-gray-200 bg-white py-2 px-4 ${
              activeTab === "estimates" ? "border-gray-300 font-medium" : ""
            }`}
          >
            <FileText className="h-4 w-4" />
            Estimates Sent
          </TabsTrigger>
          <TabsTrigger
            value="approved"
            className={`flex items-center gap-2 rounded-md border border-gray-200 bg-white py-2 px-4 ${
              activeTab === "approved" ? "border-gray-300 font-medium" : ""
            }`}
          >
            <CheckCircle className="h-4 w-4" />
            Approved List
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className={`flex items-center gap-2 rounded-md border border-gray-200 bg-white py-2 px-4 ${
              activeTab === "completed" ? "border-gray-300 font-medium" : ""
            }`}
          >
            <CheckSquare className="h-4 w-4" />
            Completed
          </TabsTrigger>
        </TabsList>

        <div className="mb-4 flex items-center justify-between">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search by name or id..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {activeTab === "leads" && (
            <Button className="flex items-center gap-2 bg-black text-white">
              <Plus className="h-4 w-4" />
              Add New Lead
            </Button>
          )}

          <Button variant="outline" size="sm" className="ml-2">
            Filters
          </Button>
        </div>

        <TabsContent value="leads" className="mt-0">
          <div className="rounded-sm border">
            <div className="grid grid-cols-7 gap-2 bg-gray-100 p-4 text-sm font-medium">
              <div>ID</div>
              <div>Client Name</div>
              <div>Address</div>
              <div>Scope of Work</div>
              <div>Visiting Date</div>
              <div>Assign</div>
              <div>Send to Next</div>
              <div>Action</div>
            </div>

            {filteredLeads.map((lead) => (
              <div key={lead.id} className="grid grid-cols-7 gap-2 border-t border-gray-200 p-4 text-sm">
                <div>{lead.id}</div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/admin-portal/avatar.png" alt={lead.clientName} />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <span className="mt-1">{lead.clientName}</span>
                </div>
                <div className="text-center">{lead.address}</div>
                <div className="text-center">{lead.scopeOfWork}</div>
                <div className="text-center">{lead.visitingDate}</div>
                <div className="text-center">{lead.assign}</div>
                <div className="text-center">
                  <Button size="sm" className="bg-black text-white">
                    Next
                  </Button>
                </div>
                <div className="text-center">
                  <Button variant="ghost" className="h-auto p-0 text-red-500 hover:text-red-600">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">Showing 1-10 from 100</div>
            <div className="flex items-center space-x-2">{renderPagination()}</div>
          </div>
        </TabsContent>

        <TabsContent value="estimates" className="mt-0">
          <div className="rounded-sm border">
            <div className="grid grid-cols-7 gap-2 bg-gray-100 p-4 text-sm font-medium">
              <div>ID</div>
              <div>Client Name</div>
              <div>Address</div>
              <div>Scope of Work</div>
              <div>Visiting Date</div>
              <div>Assign</div>
              <div>Send to Next</div>
              <div>Action</div>
            </div>

            {filteredLeads.map((lead) => (
              <div key={lead.id} className="grid grid-cols-7 gap-2 border-t border-gray-200 p-4 text-sm">
                <div>{lead.id}</div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/admin-portal/avatar.png" alt={lead.clientName} />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <span className="mt-1">{lead.clientName}</span>
                </div>
                <div className="text-center">{lead.address}</div>
                <div className="text-center">{lead.scopeOfWork}</div>
                <div className="text-center">{lead.visitingDate}</div>
                <div className="text-center">{lead.assign}</div>
                <div className="text-center">
                  <Button size="sm" className="bg-black text-white">
                    Send to Next
                  </Button>
                </div>
                <div className="text-center">
                  <Button variant="ghost" className="h-auto p-0 text-red-500 hover:text-red-600">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">Showing 1-10 from 100</div>
            <div className="flex items-center space-x-2">{renderPagination()}</div>
          </div>
        </TabsContent>

        <TabsContent value="approved" className="mt-0">
          <div className="rounded-sm border">
            <div className="grid grid-cols-8 gap-2 bg-gray-100 p-4 text-sm font-medium">
              <div>Contract ID</div>
              <div>Client Name</div>
              <div>Address</div>
              <div>Scope of Work</div>
              <div>Visiting Date</div>
              <div>Time Left</div>
              <div>Assign</div>
              <div>Project Completion</div>
              <div>Action</div>
            </div>

            {filteredLeads.map((lead) => (
              <div key={lead.id} className="grid grid-cols-8 gap-2 border-t border-gray-200 p-4 text-sm">
                <div>
                  <div>ID: 01</div>
                  <div>{lead.id}</div>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/admin-portal/avatar.png" alt={lead.clientName} />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <span className="mt-1">{lead.clientName}</span>
                </div>
                <div className="text-center">{lead.address}</div>
                <div className="text-center">{lead.scopeOfWork}</div>
                <div className="text-center">{lead.visitingDate}</div>
                <div className="text-center">5 Days</div>
                <div className="text-center">{lead.assign}</div>
                <div className="text-center">
                  <Button size="sm" className="bg-black text-white">
                    Press to Complete
                  </Button>
                </div>
                <div className="text-center">
                  <Button variant="ghost" className="h-auto p-0 text-red-500 hover:text-red-600">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">Showing 1-10 from 100</div>
            <div className="flex items-center space-x-2">{renderPagination()}</div>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-0">
          <div className="rounded-sm border">
            <div className="grid grid-cols-7 gap-2 bg-gray-100 p-4 text-sm font-medium">
              <div>ID</div>
              <div>Client Name</div>
              <div>Address</div>
              <div>Scope of Work</div>
              <div>Visiting Date</div>
              <div>Assign</div>
              <div>Send to Next</div>
              <div>Action</div>
            </div>

            {filteredLeads.map((lead) => (
              <div key={lead.id} className="grid grid-cols-7 gap-2 border-t border-gray-200 p-4 text-sm">
                <div>{lead.id}</div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/admin-portal/avatar.png" alt={lead.clientName} />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <span className="mt-1">{lead.clientName}</span>
                </div>
                <div className="text-center">{lead.address}</div>
                <div className="text-center">{lead.scopeOfWork}</div>
                <div className="text-center">{lead.visitingDate}</div>
                <div className="text-center">{lead.assign}</div>
                <div className="text-center">
                  <Button size="sm" className="bg-black text-white">
                    Send to Next
                  </Button>
                </div>
                <div className="text-center">
                  <Button variant="ghost" className="h-auto p-0 text-red-500 hover:text-red-600">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">Showing 1-10 from 100</div>
            <div className="flex items-center space-x-2">{renderPagination()}</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { Users, FileText, CheckCircle, CheckSquare } from "lucide-react"
