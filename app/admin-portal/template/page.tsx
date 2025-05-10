"use client"

import { useState } from "react"
import { Pencil, FileText, FilePlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TemplatePage() {
  const [title, setTitle] = useState("Template Title")
  const [sections, setSections] = useState([
    { id: 1, title: "Section", content: "" },
    { id: 2, title: "Sub Section", content: "" },
  ])
  const [content, setContent] = useState("Content")

  const addNewSection = () => {
    setSections([...sections, { id: Date.now(), title: "New Section", content: "" }])
  }

  return (
    <div className="space-y-6">
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

      <div className="space-y-6 rounded-md border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">{title}</h1>
          <Button variant="ghost" size="icon">
            <Pencil className="h-5 w-5" />
          </Button>
        </div>

        {sections.map((section) => (
          <div key={section.id} className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <Button variant="ghost" size="icon">
              <Pencil className="h-5 w-5" />
            </Button>
          </div>
        ))}

        <div className="flex items-center justify-between">
          <div>{content}</div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Pencil className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Button variant="outline" className="mt-4" onClick={addNewSection}>
          Add New Section
        </Button>

        <div className="flex justify-center pt-8">
          <Button className="bg-black px-8 py-2 text-white">Save Template</Button>
        </div>
      </div>
    </div>
  )
}
