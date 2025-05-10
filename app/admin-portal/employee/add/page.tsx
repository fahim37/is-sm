"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export default function AddEmployeePage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    immigrationStatus: {
      studyPermit: false,
      workPermit: true,
      permanentResident: false,
      citizenship: false,
    },
    expirationDate: "",
    naExpirationDate: true,
    position: {
      teamLead: false,
      projectManager: true,
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <div className="space-y-6">
      <div className="rounded-md bg-gray-100 p-4">
        <h1 className="text-center text-2xl font-bold">Add New Employee</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Employee Name</Label>
            <Input
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Immigration Status</Label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="study-permit"
                  checked={formData.immigrationStatus.studyPermit}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      immigrationStatus: {
                        ...formData.immigrationStatus,
                        studyPermit: checked as boolean,
                      },
                    })
                  }
                />
                <Label htmlFor="study-permit">Study Permit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="work-permit"
                  checked={formData.immigrationStatus.workPermit}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      immigrationStatus: {
                        ...formData.immigrationStatus,
                        workPermit: checked as boolean,
                      },
                    })
                  }
                />
                <Label htmlFor="work-permit">Work Permit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="permanent-resident"
                  checked={formData.immigrationStatus.permanentResident}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      immigrationStatus: {
                        ...formData.immigrationStatus,
                        permanentResident: checked as boolean,
                      },
                    })
                  }
                />
                <Label htmlFor="permanent-resident">Permanent Resident</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="citizenship"
                  checked={formData.immigrationStatus.citizenship}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      immigrationStatus: {
                        ...formData.immigrationStatus,
                        citizenship: checked as boolean,
                      },
                    })
                  }
                />
                <Label htmlFor="citizenship">Citizenship</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Immigration Expiration Date</Label>
            <div className="flex items-center gap-4">
              <Label htmlFor="expiration-date" className="min-w-[40px]">
                Date
              </Label>
              <Input
                id="expiration-date"
                type="date"
                disabled={formData.naExpirationDate}
                value={formData.expirationDate}
                onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
                className="max-w-[200px]"
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="na-expiration"
                  checked={formData.naExpirationDate}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      naExpirationDate: checked as boolean,
                    })
                  }
                />
                <Label htmlFor="na-expiration">N/A</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Employment Position</Label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="team-lead"
                  checked={formData.position.teamLead}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      position: {
                        ...formData.position,
                        teamLead: checked as boolean,
                      },
                    })
                  }
                />
                <Label htmlFor="team-lead">Team Lead</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="project-manager"
                  checked={formData.position.projectManager}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      position: {
                        ...formData.position,
                        projectManager: checked as boolean,
                      },
                    })
                  }
                />
                <Label htmlFor="project-manager">Project Manager Operations</Label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="submit" className="bg-black px-8 py-2 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
