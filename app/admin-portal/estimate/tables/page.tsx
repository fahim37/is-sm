"use client"

// Dummy data for tables
const leadListData = [
  {
    clientName: "Client 1",
    clientAddress: "123 Main St, New York",
    scopeOfWork: "Design",
    visitDate: "29 Dec 2026",
    employeeSent: "Employee 1",
    reschedule: "Reschedule visit",
    note: "Note",
    startNew: "start New contract and Estimation",
    assignTeamLead: "Team Lead 1",
  },
  {
    clientName: "Client 2",
    clientAddress: "456 Oak St, New York",
    scopeOfWork: "Renovation",
    visitDate: "30 Dec 2026",
    employeeSent: "Employee 2",
    reschedule: "Reschedule visit",
    note: "Note",
    startNew: "start New contract and Estimation",
    assignTeamLead: "Team Lead 2",
  },
]

const estimatesSentData = [
  {
    clientName: "Client 1",
    clientAddress: "123 Main St, New York",
    scopeOfWork: "Design",
    visitDate: "29 Dec 2026",
    employeeWorking: "Employee 1",
    teamLeadVerifying: "Team Lead 1",
    openContract: "Open Contract and Estimation Dashboard",
    openFollowUp: "Open Follow-up Log",
    assignTeamLead: "Team Lead 1",
  },
  {
    clientName: "Client 2",
    clientAddress: "456 Oak St, New York",
    scopeOfWork: "Renovation",
    visitDate: "30 Dec 2026",
    employeeWorking: "Employee 2",
    teamLeadVerifying: "Team Lead 2",
    openContract: "Open Contract and Estimation Dashboard",
    openFollowUp: "Open Follow-up Log",
    assignTeamLead: "Team Lead 2",
  },
]

const estimatesToBeApprovedData = [
  {
    clientName: "Client 1",
    clientAddress: "123 Main St, New York",
    scopeOfWork: "Design",
    visitDate: "29 Dec 2026",
    employeeWorking: "Employee 1",
    teamLeadVerifying: "Team Lead 1",
    openContract: "Open Contract and Estimation Dashboard",
    verifyContract: "Verify The contract As Super Admin",
  },
  {
    clientName: "Client 2",
    clientAddress: "456 Oak St, New York",
    scopeOfWork: "Renovation",
    visitDate: "30 Dec 2026",
    employeeWorking: "Employee 2",
    teamLeadVerifying: "Team Lead 2",
    openContract: "Open Contract and Estimation Dashboard",
    verifyContract: "Verify The contract As Super Admin",
  },
]

export default function TablesPage() {
  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-black p-4 text-white">
        <h1 className="text-center text-2xl font-bold">List of Table 1</h1>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Lead List Table */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Lead List</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Client Name</th>
                  <th className="border border-gray-300 p-2 text-left">Client Address</th>
                  <th className="border border-gray-300 p-2 text-left">Scope of Work</th>
                  <th className="border border-gray-300 p-2 text-left">Visit Date for company calander</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Employee sent for visit</td>
                  <td className="border border-gray-300 p-2">Reschedule visit</td>
                  <td className="border border-gray-300 p-2">Note</td>
                  <td className="border border-gray-300 p-2">start New contract and Estimation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Assign Team Lead</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Estimates Sent and Follow-up Log */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Estimates Sent and Follow-up Log</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Client Name</th>
                  <th className="border border-gray-300 p-2 text-left">Client Address</th>
                  <th className="border border-gray-300 p-2 text-left">Scope of Work</th>
                  <th className="border border-gray-300 p-2 text-left">Visit Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Employee Working on Contract And Estimation</td>
                  <td className="border border-gray-300 p-2">Team Lead Verifying Contract</td>
                  <td className="border border-gray-300 p-2">Open Contract and Estimation Dashboard</td>
                  <td className="border border-gray-300 p-2">Open Follow-up Log</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Assign Team Lead</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Estimates To Be Approves Sent Log */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Estimates To Be Approves Sent Log</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Client Name</th>
                  <th className="border border-gray-300 p-2 text-left">Client Address</th>
                  <th className="border border-gray-300 p-2 text-left">Scope of Work</th>
                  <th className="border border-gray-300 p-2 text-left">Visit Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Employee Working on contract and Estimation</td>
                  <td className="border border-gray-300 p-2">Team Lead Verifying contract</td>
                  <td className="border border-gray-300 p-2">Open Contract and Estimation Dashboard</td>
                  <td className="border border-gray-300 p-2">Verify The contract As Super Admin</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty table for layout */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold"></h2>
          </div>
          <div className="p-4">{/* Empty table */}</div>
        </div>
      </div>

      <div className="mb-6 rounded-md bg-black p-4 text-white">
        <h1 className="text-center text-2xl font-bold">List of Table 2</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Finished Project List */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Finished Project List</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Client Address</th>
                  <th className="border border-gray-300 p-2 text-left">Visit Notes File</th>
                  <th className="border border-gray-300 p-2 text-left">Contract File (word) Designed</th>
                  <th className="border border-gray-300 p-2 text-left">Estimate File (Excel)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Notes</td>
                  <td className="border border-gray-300 p-2">Drawing</td>
                  <td className="border border-gray-300 p-2">Permit File</td>
                  <td className="border border-gray-300 p-2">Occupancy File</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Project start Date</td>
                  <td className="border border-gray-300 p-2">Project Deadline Date</td>
                  <td className="border border-gray-300 p-2">bring Back to Active Project List</td>
                  <td className="border border-gray-300 p-2">Open Contract and Estimate Dashboard</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Start New Contract and Estimate Table */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Start New Contract and Estimate Table</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Client Address</th>
                  <th className="border border-gray-300 p-2 text-left">Upload Notes File</th>
                  <th className="border border-gray-300 p-2 text-left">Upload drawings and Design</th>
                  <th className="border border-gray-300 p-2 text-left">Clint Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Project start Date</td>
                  <td className="border border-gray-300 p-2">Project Deadline Date</td>
                  <td className="border border-gray-300 p-2">Notes</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">Open Contract and Estimate Dashboard</td>
                  <td className="border border-gray-300 p-2">Delete Contract and Estimate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Projects List Table */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Active Projects List Table</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Contract Address</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Visit Notes File</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Upload Drawings</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Contract File (word)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Open/Edit Estimate File (Excel)</td>
                  <td className="border border-gray-300 p-2">Open/Edit Designed File</td>
                  <td className="border border-gray-300 p-2">Open/Edit Permit File</td>
                  <td className="border border-gray-300 p-2">Edit Project Start Date</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Edit Project Deadline Date</td>
                  <td className="border border-gray-300 p-2">Open/Edit Occupancy Files</td>
                  <td className="border border-gray-300 p-2">Edit Note</td>
                  <td className="border border-gray-300 p-2">Delete Contract and Estimate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Edit Client Name</td>
                  <td className="border border-gray-300 p-2">Send To Finished Project List</td>
                  <td className="border border-gray-300 p-2">Open Contract and Estimate Dashboard</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Open contract and estimate Table */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Open contract and estimate Table</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Contract Address</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Visit Notes File</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Upload Drawings</th>
                  <th className="border border-gray-300 p-2 text-left">Open/Edit Contract File (word)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Open/Edit Estimate File (Excel)</td>
                  <td className="border border-gray-300 p-2">Open/Edit Designed File</td>
                  <td className="border border-gray-300 p-2">Open/Edit Permit File</td>
                  <td className="border border-gray-300 p-2">Edit Project Start Date</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Edit Project Deadline Date</td>
                  <td className="border border-gray-300 p-2">Open/Edit Occupancy Files</td>
                  <td className="border border-gray-300 p-2">Edit Note</td>
                  <td className="border border-gray-300 p-2">Delete Contract and Estimate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Edit Client Name</td>
                  <td className="border border-gray-300 p-2">Send To Active Project List</td>
                  <td className="border border-gray-300 p-2">Real kitchen Price Files</td>
                  <td className="border border-gray-300 p-2">Open Contract and Estimate Dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
