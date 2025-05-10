"use client";

export default function ZoomInPage() {
  // Generate empty data for tables
  const generateEmptyRows = (count: number) => {
    return Array.from({ length: count }, () => ({
      name: "",
      value: "",
    }));
  };

  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-gray-100 p-4">
        <h1 className="text-center text-2xl font-bold">Create Estimate</h1>
      </div>

      {/* Estimate Rows */}
      <div className="mb-6 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 bg-gray-200 p-2 text-center">
                Sr No.
              </th>
              <th className="border border-gray-300 bg-green-500 p-2 text-center">
                Description
              </th>
              <th className="border border-gray-300 bg-green-500 p-2 text-center">
                Quantity
              </th>
              <th className="border border-gray-300 bg-green-500 p-2 text-center">
                Unit
              </th>
              <th className="border border-gray-300 bg-gray-200 p-2 text-center">
                Unit Price
              </th>
              <th className="border border-gray-300 bg-gray-200 p-2 text-center">
                Amount
              </th>
              <th className="border border-gray-300 bg-yellow-300 p-2 text-center">
                Markup %
              </th>
              <th className="border border-gray-300 bg-yellow-300 p-2 text-center">
                Markup $
              </th>
              <th className="border border-gray-300 bg-blue-400 p-2 text-center">
                Sell Price
              </th>
              <th className="border border-gray-300 bg-red-400 p-2 text-center">
                Discount %
              </th>
              <th className="border border-gray-300 bg-red-400 p-2 text-center">
                Discount $
              </th>
              <th className="border border-gray-300 bg-green-500 p-2 text-center">
                Final Price
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((rowGroup) => (
              <>
                <tr key={`group-${rowGroup}`}>
                  <td className="border border-gray-300 p-2 text-center">
                    {rowGroup}
                  </td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                </tr>
                {Array.from({ length: 10 }).map((_, index) => (
                  <tr key={`row-${rowGroup}-${index}`}>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                  </tr>
                ))}
                <tr
                  key={`subtotal-${rowGroup}`}
                  className="bg-black text-white"
                >
                  <td
                    className="border border-gray-300 p-2 text-center"
                    colSpan={12}
                  >
                    Subtotal
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      {/* Materials and Labour Prices */}
      <div className="mb-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-center font-bold">Materials Prices</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                    Category
                  </th>
                  <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                    Item
                  </th>
                  <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                    Unit
                  </th>
                  <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {generateEmptyRows(5).map((_, index) => (
                  <tr key={`material-${index}`}>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="mb-2 text-center font-bold">Labour Prices</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                    Category
                  </th>
                  <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                    Item
                  </th>
                  <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                    Unit
                  </th>
                  <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {generateEmptyRows(5).map((_, index) => (
                  <tr key={`labour-${index}`}>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                    <td className="border border-gray-300 p-2 text-center"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Scope of Work Sections */}
      <div className="space-y-6">
        {[
          {
            title: "Windows Scope of Work",
            title2: "Siding Install over Existing Material",
          },
          {
            title: "Prep Scope of Work",
            title2: "Siding Install over Existing Material One Storey House",
          },
          {
            title: "Framing Scope of Work",
            title2: "Siding Install Two Storey Plus",
          },
          { title: "Drop Ceiling", title2: "Window Scope of Work" },
          {
            title: "Plumbing Scope of Work",
            title2: "Plumbing Scope of Work Vanities",
          },
          {
            title: "Interior Design for Bathroom",
            title2: "Landscaping Scope of Work",
          },
          {
            title: "Electrical Scope of Work",
            title2: "Landscaping Scope of Work",
          },
          { title: "Interior Design for GR", title2: "Sodden Sod Fit" },
          {
            title: "Drywalliing Scope of Work",
            title2: "Plumbing Scope of Work",
          },
          {
            title: "Wood Fence 6 Foot 4'x4'",
            title2: "Plumbing Scope of Work",
          },
          {
            title: "Wall Type Sand Scope of Work",
            title2: "Flooring Scope of Work",
          },
          {
            title: "Wood Deck 2 Foot Height Only 4'x8'",
            title2: "Prep Scope of Work",
          },
          { title: "Painting Scope of Work", title2: "Door Scope of Work" },
          {
            title:
              "Concrete Scope of Work with Direct Nailing 2 Foot Height Only",
            title2: "Door Scope of Work",
          },
          {
            title: "Flooring Scope of Work",
            title2: "Baseboard Scope of Work",
          },
          { title: "Complete Finishing", title2: "Drop Ceiling" },
          { title: "Doors Scope of Work", title2: "Firewall Scope of Work" },
          { title: "Basements", title2: "Kitchen Scope of Work" },
          {
            title: "Baseboards Scope of Work",
            title2: "Electrical Scope of Work",
          },
          { title: "Framing Scope of Work", title2: "Mail Two Scope of Work" },
          { title: "Kitchen Scope of Work", title2: "HVAC Scope of Work" },
        ].map((section, index) => (
          <div key={index} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h2 className="mb-2 text-center font-bold">{section.title}</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                      Category
                    </th>
                    <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                      Item
                    </th>
                    <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                      Unit
                    </th>
                    <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {generateEmptyRows(5).map((_, rowIndex) => (
                    <tr key={`section-${index}-left-${rowIndex}`}>
                      <td className="border border-gray-300 p-2 text-center"></td>
                      <td className="border border-gray-300 p-2 text-center"></td>
                      <td className="border border-gray-300 p-2 text-center"></td>
                      <td className="border border-gray-300 p-2 text-center"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h2 className="mb-2 text-center font-bold">{section.title2}</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                      Category
                    </th>
                    <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                      Item
                    </th>
                    <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                      Unit
                    </th>
                    <th className="border border-gray-300 bg-gray-100 p-2 text-center">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {generateEmptyRows(5).map((_, rowIndex) => (
                    <tr key={`section-${index}-right-${rowIndex}`}>
                      <td className="border border-gray-300 p-2 text-center"></td>
                      <td className="border border-gray-300 p-2 text-center"></td>
                      <td className="border border-gray-300 p-2 text-center"></td>
                      <td className="border border-gray-300 p-2 text-center"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
