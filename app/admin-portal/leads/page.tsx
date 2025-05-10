"use client"

import { useState } from "react"
import { Users, FileText, FileCheck, ClipboardCheck, Search, SlidersHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pagination } from "../components/pagination"

// Dummy data for leads
const leads = Array.from({ length: 10 }, (_, i) => ({
  id: (i + 1).toString().padStart(2, "0"),
  name: "Sharma",
  address: "13th Street, 47 W 13th St, New York",
  scopeOfWork: "Design",
  visitingDate: "29 Dec 2026",
  assign: "Mr. Raja",
}))

export default function LeadsPage() {
  const [activeTab, setActiveTab] = useState("leads")

  return (
    <div className="space-y-4">
      <Tabs defaultValue="leads" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 bg-transparent p-0">
          <TabsTrigger
            value="leads"
            className={`flex items-center gap-2 rounded-none border border-gray-200 bg-white py-2 ${
              activeTab === "leads" ? "border-b-0 font-medium" : ""
            }`}
          >
            <Users className="h-4 w-4" />
            Leads List
          </TabsTrigger>
          <TabsTrigger
            value="estimates"
            className={`flex items-center gap-2 rounded-none border border-gray-200 bg-white py-2 ${
              activeTab === "estimates" ? "border-b-0 font-medium" : ""
            }`}
          >
            <FileText className="h-4 w-4" />
            Estimates Sent
          </TabsTrigger>
          <TabsTrigger
            value="approved"
            className={`flex items-center gap-2 rounded-none border border-gray-200 bg-white py-2 ${
              activeTab === "approved" ? "border-b-0 font-medium" : ""
            }`}
          >
            <FileCheck className="h-4 w-4" />
            Approved List
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className={`flex items-center gap-2 rounded-none border border-gray-200 bg-white py-2 ${
              activeTab === "completed" ? "border-b-0 font-medium" : ""
            }`}
          >
            <ClipboardCheck className="h-4 w-4" />
            Completed
          </TabsTrigger>
        </TabsList>

        <div className="mt-4 flex items-center justify-between">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search by name or id..." className="pl-8" />
          </div>

          {activeTab === "leads" && (
            <Button className="flex items-center gap-2 bg-black text-white">
              <Plus className="h-4 w-4" />
              Add New Lead
            </Button>
          )}

          <Button variant="outline" size="icon" className="ml-2">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Filters</span>
          </Button>
        </div>

        <TabsContent value="leads" className="mt-4">
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

            {leads.map((lead) => (
              <div key={lead.id} className="grid grid-cols-7 gap-2 border-t border-gray-200 p-4 text-sm">
                <div>{lead.id}</div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/admin-portal/avatar.png" alt={lead.name} />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <span className="mt-1">{lead.name}</span>
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

          <Pagination totalItems={100} itemsPerPage={10} />
        </TabsContent>

        <TabsContent value="estimates" className="mt-4">
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

            {leads.map((lead) => (
              <div key={lead.id} className="grid grid-cols-7 gap-2 border-t border-gray-200 p-4 text-sm">
                <div>{lead.id}</div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/admin-portal/avatar.png" alt={lead.name} />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <span className="mt-1">{lead.name}</span>
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

          <Pagination totalItems={100} itemsPerPage={10} />
        </TabsContent>

        <TabsContent value="approved" className="mt-4">
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

            {leads.map((lead) => (
              <div key={lead.id} className="grid grid-cols-7 gap-2 border-t border-gray-200 p-4 text-sm">
                <div>{lead.id}</div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/admin-portal/avatar.png" alt={lead.name} />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <span className="mt-1">{lead.name}</span>
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

          <Pagination totalItems={100} itemsPerPage={10} />
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
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

            {leads.map((lead) => (
              <div key={lead.id} className="grid grid-cols-7 gap-2 border-t border-gray-200 p-4 text-sm">
                <div>{lead.id}</div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/admin-portal/avatar.png" alt={lead.name} />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <span className="mt-1">{lead.name}</span>
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

          <Pagination totalItems={100} itemsPerPage={10} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
