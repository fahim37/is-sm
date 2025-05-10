"use client"

import type React from "react"

import { useState } from "react"
import { Users, UserPlus, FileUp, FileText, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NewsPage() {
  const [newsTitle, setNewsTitle] = useState("")
  const [newsContent, setNewsContent] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("News submitted:", { newsTitle, newsContent, file })
    // Handle form submission logic here
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Employee List
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          Add Employee
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <FileUp className="h-4 w-4" />
          File Upload
        </Button>
        <Button variant="default" className="flex items-center gap-2 bg-black text-white">
          <FileText className="h-4 w-4" />
          Update News
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Remainder
        </Button>
      </div>

      <div className="rounded-md border p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="news-title">News Title</Label>
            <Input
              id="news-title"
              placeholder="Enter news title"
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="news-content">News Content</Label>
            <Textarea
              id="news-content"
              placeholder="Enter news content"
              className="min-h-[200px]"
              value={newsContent}
              onChange={(e) => setNewsContent(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file-upload">Attach File (Optional)</Label>
            <Input id="file-upload" type="file" onChange={handleFileChange} />
            {file && <p className="text-sm text-gray-500">Selected file: {file.name}</p>}
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="bg-black px-8 py-2 text-white">
              Post News
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
