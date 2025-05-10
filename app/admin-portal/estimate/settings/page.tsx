"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    immigrationStatus: {
      studyPermit: false,
      workPermit: true,
      permanentResident: false,
      citizenship: false,
    },
    expirationDate: "",
    naExpirationDate: true,
    position: {
      projectManager: true,
      teamLead: false,
    },
  })

  const handleChange = (field: string, value: string) => {
    setEmployeeData({
      ...employeeData,
      [field]: value,
    })
  }

  const handleCheckboxChange = (section: string, field: string, value: boolean) => {
    setEmployeeData({
      ...employeeData,
      [section]: {
        ...employeeData[section as keyof typeof employeeData],
        [field]: value,
      },
    })
  }

  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-black p-4 text-white">
        <h1 className="text-center text-2xl font-bold">Setting Page</h1>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Sign up New Employee Portal */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Sign up New Employee Portal</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Name</td>
                  <td className="border border-gray-300 p-2">
                    <Input
                      placeholder="Enter name"
                      value={employeeData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Email Address</td>
                  <td className="border border-gray-300 p-2">
                    <Input
                      placeholder="Enter email"
                      value={employeeData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Ohone Number</td>
                  <td className="border border-gray-300 p-2">
                    <Input
                      placeholder="Enter phone"
                      value={employeeData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Address</td>
                  <td className="border border-gray-300 p-2">
                    <Input
                      placeholder="Enter address"
                      value={employeeData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Immigration status</td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="study-permit"
                          checked={employeeData.immigrationStatus.studyPermit}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("immigrationStatus", "studyPermit", checked as boolean)
                          }
                        />
                        <Label htmlFor="study-permit">Study Permit</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="work-permit"
                          checked={employeeData.immigrationStatus.workPermit}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("immigrationStatus", "workPermit", checked as boolean)
                          }
                        />
                        <Label htmlFor="work-permit">Work Permit</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="permanent-resident"
                          checked={employeeData.immigrationStatus.permanentResident}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("immigrationStatus", "permanentResident", checked as boolean)
                          }
                        />
                        <Label htmlFor="permanent-resident">Permanent Resident</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="citizenship"
                          checked={employeeData.immigrationStatus.citizenship}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("immigrationStatus", "citizenship", checked as boolean)
                          }
                        />
                        <Label htmlFor="citizenship">Citizenship</Label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Immigration Expiration Date</td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex items-center gap-4">
                      <Label htmlFor="expiration-date" className="min-w-[40px]">
                        Date
                      </Label>
                      <Input
                        id="expiration-date"
                        type="date"
                        disabled={employeeData.naExpirationDate}
                        value={employeeData.expirationDate}
                        onChange={(e) => handleChange("expirationDate", e.target.value)}
                        className="max-w-[200px]"
                      />
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="na-expiration"
                          checked={employeeData.naExpirationDate}
                          onCheckedChange={(checked) =>
                            handleChange("naExpirationDate", (checked as boolean) ? "true" : "false")
                          }
                        />
                        <Label htmlFor="na-expiration">N/A</Label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Employment Position</td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="project-manager"
                          checked={employeeData.position.projectManager}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("position", "projectManager", checked as boolean)
                          }
                        />
                        <Label htmlFor="project-manager">Project Manager Operations</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="team-lead"
                          checked={employeeData.position.teamLead}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("position", "teamLead", checked as boolean)
                          }
                        />
                        <Label htmlFor="team-lead">Team Lead</Label>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Admin Settings */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Admin Settings</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Edit Company Details</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Edit Company Address</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Company Logo File Upload</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Admin Security</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Employee List and Controls (Table Format) */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Employee List and Controls (Table Format)</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Name</th>
                  <th className="border border-gray-300 p-2 text-left">Position Hired</th>
                  <th className="border border-gray-300 p-2 text-left">Immigration status</th>
                  <th className="border border-gray-300 p-2 text-left">Immigration Expiration Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Promote/Demote Employee</td>
                  <td className="border border-gray-300 p-2">Delete Profile and Access</td>
                  <td className="border border-gray-300 p-2">Delete Profile and Access</td>
                  <td className="border border-gray-300 p-2">Employee Salary</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Notes</td>
                  <td className="border border-gray-300 p-2">Salary Sent Log</td>
                  <td className="border border-gray-300 p-2">Employee Unique ID</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Admin Security */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Admin Security</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Password Reset</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">2nd Email for Account Recovery</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Phone Number Recovery Change</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
