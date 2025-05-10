"use client"

export default function ResourcesPage() {
  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-black p-4 text-white">
        <h1 className="text-center text-2xl font-bold">Contract and Estimate Dashboard</h1>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Safety Training Quiz and Modules */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Safety Training Quiz and Modules</h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 gap-2">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="border-b border-gray-200 py-2"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Knowledge Bank And Resources */}
        <div className="border border-gray-200">
          <div className="bg-black p-4 text-center text-white">
            <h2 className="text-lg font-semibold">Knowledge Bank And Resources</h2>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Residential Renovation</td>
                  <td className="border border-gray-300 p-2">New Built Residential</td>
                  <td className="border border-gray-300 p-2">Links and Websites</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Commercial Renovation</td>
                  <td className="border border-gray-300 p-2">New Built Commercial</td>
                  <td className="border border-gray-300 p-2">Brochures and Checklist</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mb-6 bg-black p-4 text-center text-white">
        <h2 className="text-lg font-semibold">Steps To Successful Training</h2>
      </div>

      <div className="border border-gray-200">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">Taking Lead Call And Screening</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Scheduling Visit And What to Do During Visit</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Introduction to Contracts</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Steps to Create and Edit Contract Part 1</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Steps to Create and Edit Contract Part 2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Contract Test 1</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Contract Test 2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Contract Test 3</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Introduction to Estimates</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Steps to Create and Edit Estimates Part 1</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Steps to Create and Edit Estimates Part 2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Estimates Test 1</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Estimates Test 2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Send Estimate for Approval to Team Lead</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Prep for First Visit ,How to Close on first Go</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Introduction to Change Order</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Introduction to DocuSign</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Steps After DocuSign</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 text-center">Assignment 1 Full House Renovation</td>
              <td className="border border-gray-300 p-3 text-center">Assignment 3 Kitchen Renovation</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 text-center">Assignment 2 Washroom Renovation</td>
              <td className="border border-gray-300 p-3 text-center">Assignment 3 Kitchen Renovation</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 text-center">Assignment 3 Kitchen Renovation</td>
              <td className="border border-gray-300 p-3 text-center">Assignment 3 Kitchen Renovation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
