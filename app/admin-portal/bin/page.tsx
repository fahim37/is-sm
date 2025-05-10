"use client"
import { FileText, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Pagination } from "../components/pagination"

// Dummy data for deleted files
const deletedFiles = Array.from({ length: 9 }, (_, i) => ({
  name: "File name",
  originalLocation: "Completed project",
  dateDeleted: "29 Dec 2024",
}))

export default function BinPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="grid grid-cols-4 gap-4 bg-gray-100 p-4 font-medium">
          <div>Name</div>
          <div>Original Location</div>
          <div>Date Deleted</div>
          <div>Action</div>
        </div>

        {deletedFiles.map((file, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 border-t border-gray-200 p-4">
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

      <Pagination totalItems={100} itemsPerPage={10} />
    </div>
  )
}
