"use client"

import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-black p-4 text-white">
        <h1 className="text-center text-2xl font-bold">Contract And Estimate Dashboard</h1>
      </div>

      <div className="mb-6 bg-black p-4 text-white">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Button variant="outline" className="w-full bg-white text-black">
              Contract Unique ID No.
            </Button>
          </div>
          <div>
            <Button variant="outline" className="w-full bg-white text-black">
              Address
            </Button>
          </div>
          <div>
            <Button variant="outline" className="w-full bg-white text-black">
              Client Name
            </Button>
          </div>
          <div>
            <Button variant="outline" className="w-full bg-white text-black">
              Employee ID
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Contract File (Word) */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Contract File (Word) (New Tab)</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Major Renovation Contract Template</td>
                  <td className="border border-gray-300 p-2">Select</td>
                  <td className="border border-gray-300 p-2">Continue</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Washroom Renovation Contract Template</td>
                  <td className="border border-gray-300 p-2">Select</td>
                  <td className="border border-gray-300 p-2">start</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Basement Renovation Contract Template</td>
                  <td className="border border-gray-300 p-2">Select</td>
                  <td className="border border-gray-300 p-2">start</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Kitchen Renovation Contract Template</td>
                  <td className="border border-gray-300 p-2">Select</td>
                  <td className="border border-gray-300 p-2">start</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">New Built Contract Template</td>
                  <td className="border border-gray-300 p-2">Select</td>
                  <td className="border border-gray-300 p-2">start</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Estimate File (Word) */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Estimate File (Word) (New Tab)</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Major Renovation Estimate Template</td>
                  <td className="border border-gray-300 p-2">Select</td>
                  <td className="border border-gray-300 p-2">Continue</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Washroom Renovation Estimate Template</td>
                  <td className="border border-gray-300 p-2">Select</td>
                  <td className="border border-gray-300 p-2">start</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Basement Renovation Estimate Template</td>
                  <td className="border border-gray-300 p-2">Select</td>
                  <td className="border border-gray-300 p-2">start</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Kitchen Renovation Estimate Template</td>
                  <td className="border border-gray-300 p-2">Select</td>
                  <td className="border border-gray-300 p-2">start</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">New Built Estimate Template</td>
                  <td className="border border-gray-300 p-2">Select</td>
                  <td className="border border-gray-300 p-2">start</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Knowledge Bank And Resources */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Knowledge Bank And Resources</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Contract Address</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Visit Notes File</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Upload Drawing</th>
                  <th className="border border-gray-300 p-2 text-left">Edit Project Start Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Open/Edit Permit Files</td>
                  <td className="border border-gray-300 p-2">Edit Project Deadline Date</td>
                  <td className="border border-gray-300 p-2">Open/Edit Occupancy Files</td>
                  <td className="border border-gray-300 p-2">Edit Notes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Open/Edit Docusigned File</td>
                  <td className="border border-gray-300 p-2">Edit Client Name</td>
                  <td className="border border-gray-300 p-2">Real Kitchen Price File</td>
                  <td className="border border-gray-300 p-2">Design Guide</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Employee Name */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Employee Name</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-center">Step 1</th>
                  <th className="border border-gray-300 p-2 text-center">Step 2</th>
                  <th className="border border-gray-300 p-2 text-center">Step 3</th>
                  <th className="border border-gray-300 p-2 text-center">Step 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">Send to Team Leadf For Vacation</td>
                  <td className="border border-gray-300 p-2 text-center">Verificaton Done Reb</td>
                  <td className="border border-gray-300 p-2 text-center">Email Estimate to Client</td>
                  <td className="border border-gray-300 p-2 text-center">Follow Up Log</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">Step 5</td>
                  <td className="border border-gray-300 p-2 text-center">Step 6</td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">Upload Docusigned</td>
                  <td className="border border-gray-300 p-2 text-center">Send to Active Project List</td>
                  <td className="border border-gray-300 p-2 text-center">Send to Cancel Project List</td>
                  <td className="border border-gray-300 p-2 text-center">Delete Contract and Estimate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
