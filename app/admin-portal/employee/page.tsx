"use client"
import { Users, UserPlus, FileUp, FileText, Bell, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pagination } from "../components/pagination"

// Dummy data for employees
const employees = Array.from({ length: 8 }, (_, i) => ({
  id: "01",
  name: "Mr. Raja",
  position: "Team Lead",
  immigrationStatus: "VISA",
  expiryDate: "29 Dec 2026",
  hiredDate: "29 Dec 2022",
  salary: "$500.00",
  status: "Promoted",
}))

export default function EmployeePage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Employee List
        </Button>
        <Button variant="default" className="flex items-center gap-2 bg-black text-white">
          <UserPlus className="h-4 w-4" />
          Add Employee
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <FileUp className="h-4 w-4" />
          File Upload
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Update News
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Remainder
        </Button>
      </div>

      <div className="rounded-sm border">
        <div className="grid grid-cols-10 gap-2 bg-gray-100 p-4 text-sm font-medium">
          <div>ID</div>
          <div className="col-span-2">Employee Name</div>
          <div>Position</div>
          <div>Immigration Status</div>
          <div>Immigration Expiry Date</div>
          <div>Hired Date</div>
          <div>Notes</div>
          <div>Salary Sent Log</div>
          <div>Salary</div>
          <div>Status</div>
          <div>Action</div>
        </div>

        {employees.map((employee, index) => (
          <div key={index} className="grid grid-cols-10 gap-2 border-t border-gray-200 p-4 text-sm">
            <div>{employee.id}</div>
            <div className="col-span-2 flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/admin-portal/avatar.png" alt={employee.name} />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <span>{employee.name}</span>
            </div>
            <div>{employee.position}</div>
            <div>{employee.immigrationStatus}</div>
            <div>{employee.expiryDate}</div>
            <div>{employee.hiredDate}</div>
            <div>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <Button variant="default" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                Download
              </Button>
            </div>
            <div>{employee.salary}</div>
            <div>
              <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                {employee.status}
              </Button>
            </div>
            <div>
              <Button variant="ghost" className="h-auto p-0 text-red-500 hover:text-red-600">
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Pagination totalItems={100} itemsPerPage={10} />
    </div>
  )
}
