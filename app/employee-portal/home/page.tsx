"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Edit } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

// Dummy data for templates
const contractTemplates = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: "Lorem Lorem Lorem Lorem Lorem Lorem",
  date: "29 Dec 2026",
  selected: false,
}))

const estimateTemplates = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: "Lorem Lorem Lorem Lorem Lorem Lorem",
  date: "29 Dec 2026",
  selected: false,
}))

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [contractTemplatesList, setContractTemplatesList] = useState(contractTemplates)
  const [estimateTemplatesList, setEstimateTemplatesList] = useState(estimateTemplates)
  const [selectedContractTemplate, setSelectedContractTemplate] = useState<number | null>(null)
  const [selectedEstimateTemplate, setSelectedEstimateTemplate] = useState<number | null>(null)

  // Filter templates based on search query
  const filteredContractTemplates = contractTemplatesList.filter((template) =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredEstimateTemplates = estimateTemplatesList.filter((template) =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleContractTemplateSelect = (id: number) => {
    setSelectedContractTemplate(id === selectedContractTemplate ? null : id)
    setContractTemplatesList(
      contractTemplatesList.map((template) => ({
        ...template,
        selected: template.id === id ? !template.selected : false,
      })),
    )
  }

  const handleEstimateTemplateSelect = (id: number) => {
    setSelectedEstimateTemplate(id === selectedEstimateTemplate ? null : id)
    setEstimateTemplatesList(
      estimateTemplatesList.map((template) => ({
        ...template,
        selected: template.id === id ? !template.selected : false,
      })),
    )
  }

  return (
    <div className="p-4">
      <Link href="/employee-portal" className="mb-4 flex items-center text-gray-600 hover:text-black">
        Back
      </Link>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Contract Templates */}
        <div>
          <div className="mb-4 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search by name or id..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 font-medium">
              <div>Name of the Template</div>
              <div>Added Date</div>
              <div>Action</div>
            </div>

            {filteredContractTemplates.map((template) => (
              <div key={template.id} className="grid grid-cols-3 gap-4 border-t border-gray-200 p-4">
                <div>{template.name}</div>
                <div>{template.date}</div>
                <div className="flex items-center">
                  <Checkbox
                    checked={template.selected}
                    onCheckedChange={() => handleContractTemplateSelect(template.id)}
                    className="mr-2"
                  />
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">Showing 1-10 from 100</div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                &lt;
              </Button>
              <Button variant="default" size="icon" className="h-8 w-8 bg-black text-white">
                1
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                3
              </Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="icon" className="h-8 w-8">
                17
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                &gt;
              </Button>
            </div>
          </div>
        </div>

        {/* Estimate Templates */}
        <div>
          <div className="mb-4 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search by name or id..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 font-medium">
              <div>Name of the Template</div>
              <div>Added Date</div>
              <div>Action</div>
            </div>

            {filteredEstimateTemplates.map((template) => (
              <div key={template.id} className="grid grid-cols-3 gap-4 border-t border-gray-200 p-4">
                <div>{template.name}</div>
                <div>{template.date}</div>
                <div className="flex items-center">
                  <Checkbox
                    checked={template.selected}
                    onCheckedChange={() => handleEstimateTemplateSelect(template.id)}
                    className="mr-2"
                  />
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">Showing 1-10 from 100</div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                &lt;
              </Button>
              <Button variant="default" size="icon" className="h-8 w-8 bg-black text-white">
                1
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                3
              </Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="icon" className="h-8 w-8">
                17
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Button className="bg-black px-8 py-2 text-white">Continue</Button>
      </div>
    </div>
  )
}
