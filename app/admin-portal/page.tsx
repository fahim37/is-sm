"use client"

import { useState } from "react"
import { FileText, FilePlus, FileCheck, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pagination } from "./components/pagination"

// Dummy data for templates
const contractTemplates = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Lorem Lorem Lorem Lorem Lorem Lorem`,
  date: "29 Dec 2026",
}))

const estimateTemplates = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Lorem Lorem Lorem Lorem Lorem Lorem`,
  date: "29 Dec 2026",
}))

export default function AdminPortalHome() {
  const [activeTab, setActiveTab] = useState("contract")

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Contract Template
            </Button>
            <Button variant="default" className="flex items-center gap-2 bg-black text-white">
              <FilePlus className="h-4 w-4" />
              Add New Template
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search category..." className="pl-8" />
          </div>

          <div className="rounded-sm border bg-gray-100">
            <div className="grid grid-cols-3 gap-4 p-4 font-medium">
              <div>Name of the Template</div>
              <div>Added Date</div>
              <div>Action</div>
            </div>

            {contractTemplates.map((template) => (
              <div key={template.id} className="grid grid-cols-3 gap-4 border-t border-gray-200 bg-white p-4">
                <div>{template.name}</div>
                <div>{template.date}</div>
                <div>
                  <Button variant="ghost" className="h-auto p-0 text-red-500 hover:text-red-600">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Pagination totalItems={100} itemsPerPage={10} />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <FileCheck className="h-4 w-4" />
              Estimate Template
            </Button>
            <Button variant="default" className="flex items-center gap-2 bg-black text-white">
              <FilePlus className="h-4 w-4" />
              Add New Template
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search category..." className="pl-8" />
          </div>

          <div className="rounded-sm border bg-gray-100">
            <div className="grid grid-cols-3 gap-4 p-4 font-medium">
              <div>Name of the Template</div>
              <div>Added Date</div>
              <div>Action</div>
            </div>

            {estimateTemplates.map((template) => (
              <div key={template.id} className="grid grid-cols-3 gap-4 border-t border-gray-200 bg-white p-4">
                <div>{template.name}</div>
                <div>{template.date}</div>
                <div>
                  <Button variant="ghost" className="h-auto p-0 text-red-500 hover:text-red-600">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Pagination totalItems={100} itemsPerPage={10} />
        </div>
      </div>
    </div>
  )
}
