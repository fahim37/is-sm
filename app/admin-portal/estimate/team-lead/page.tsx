"use client"

import { Button } from "@/components/ui/button"

export default function TeamLeadPage() {
  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-black p-4 text-white">
        <h1 className="text-center text-2xl font-bold">Team Lead Home Page</h1>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Column */}
        <div>
          <div className="mb-4 bg-black p-4 text-center text-white">
            <div className="flex justify-between">
              <div className="w-1/3">
                <Button variant="outline" className="w-full bg-white text-black">
                  Employee ID
                </Button>
              </div>
              <div className="w-1/3 text-lg font-semibold">Team Lead Dashboard</div>
              <div className="w-1/3">
                <Button variant="outline" className="w-full bg-white text-black">
                  Employee Name
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-gray-200">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 text-center">Action Tab</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-center">Leads List Assigned Table</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-center">Start New Contract and Estimate Table</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-center">StartOpen Contract and Estimate Table</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-center">Estimayes Sent and Followup Log</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-center">Active projects List Table</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-center">Finished Project List</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column - Estimates to be Approved */}
        <div>
          <div className="mb-4 bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Estimates to be Approved</h2>
          </div>

          <div className="border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Contract Address</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Visit Notes File</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Upload Drawing</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Contract File(Word)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Open/Edit Estimate File(Exel)</td>
                  <td className="border border-gray-300 p-2">Open/Edit Docusigned File</td>
                  <td className="border border-gray-300 p-2">Open/Edit Permit Files</td>
                  <td className="border border-gray-300 p-2">Edit Project Start Date</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Edit Project Deadline Date</td>
                  <td className="border border-gray-300 p-2">Open/Edit Occupancy Files</td>
                  <td className="border border-gray-300 p-2">Edit Notes</td>
                  <td className="border border-gray-300 p-2">Delete Contract and Estimate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Edit Client Name</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">Open Contract and Estimate Dashboard</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Project List Table */}
        <div>
          <div className="mb-4 bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Active Project List Table</h2>
          </div>

          <div className="border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Contract Address</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Visit Notes File</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Upload Drawing</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Contract File(Word)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Open/Edit Estimate File(Exel)</td>
                  <td className="border border-gray-300 p-2">Open/Edit Docusigned File</td>
                  <td className="border border-gray-300 p-2">Open/Edit Permit Files</td>
                  <td className="border border-gray-300 p-2">Edit Project Start Date</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Edit Project Deadline Date</td>
                  <td className="border border-gray-300 p-2">Open/Edit Occupancy Files</td>
                  <td className="border border-gray-300 p-2">Edit Notes</td>
                  <td className="border border-gray-300 p-2">Delete Contract and Estimate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Edit Client Name</td>
                  <td className="border border-gray-300 p-2">Send to Finished Project List</td>
                  <td className="border border-gray-300 p-2">Open Contract and Estimate Dashboard</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Google Calendar and Reminders / Nyce University */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-black p-4 text-center text-white">
            <div className="grid grid-cols-2">
              <div className="border-r border-white p-2">Google Calander and Reminders</div>
              <div className="p-2">Nyce University</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0">
            <div className="border border-gray-300 p-3">
              <div className="border-b border-gray-300 p-2">Google Calander and Reminders For all Employees</div>
            </div>
            <div className="border border-gray-300 p-3">
              <div className="border-b border-gray-300 p-2">Safety Training Quiz and Modules</div>
              <div className="border-b border-gray-300 p-2">Steps to Successful Sales Traning</div>
              <div className="border-b border-gray-300 p-2">Knowledge Bank and Resource</div>
              <div className="border-b border-gray-300 p-2">Settings</div>
              <div className="border-b border-gray-300 p-2">Employee Profile Update</div>
              <div className="border-b border-gray-300 p-2">Security</div>
              <div className="p-2">Delete Contract and Estimate Recycle Bim</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
