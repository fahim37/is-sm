"use client";

export default function ZoomOutPage() {
  // Sample data for the estimate table
  const estimateData = Array.from({ length: 25 }, () => ({
    srNo: 0,
    tasksForEstimator: 0,
    noDaysGanttChart1: 0,
    noDaysGanttChart2: 0,
    priceNegotiated: 0,
    labourForInvoice: 0,
    materialsForInvoice: 0,
    flatDiscount: 0,
    totalForInvoice: 0,
    gst: 0,
    pst: 0,
    vat: 0,
  }));

  // Sample data for project summary
  const projectSummary = {
    siteAddress1: "0",
    siteAddress2: "0",
    totalSaleAmount: "1300.125",
    invoiceWithGST: "757",
    totalCost: "1275",
    discountsGiven: "8757",
    invoiceTotalBeforeGST: "78",
    profitProjected: "7857",
    gst: "676",
    netGrossProfitPercentage: "26786",
  };

  return (
    <div className="p-4">
      <div className="mb-6 rounded-md bg-gray-100 p-4">
        <h1 className="text-center text-2xl font-bold">Create Estimate</h1>
      </div>

      <div className="overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 bg-yellow-300 p-2 text-center">
                Sr No.
              </th>
              <th className="border border-gray-300 bg-yellow-300 p-2 text-center">
                Tasks For Estimator
              </th>
              <th className="border border-gray-300 bg-yellow-300 p-2 text-center">
                No of Days for Gantt Chart
              </th>
              <th className="border border-gray-300 bg-yellow-300 p-2 text-center">
                No of Days for Gantt Chart
              </th>
              <th className="border border-gray-300 bg-red-400 p-2 text-center">
                Price Negotiated
              </th>
              <th className="border border-gray-300 bg-green-500 p-2 text-center">
                Labour for Invoice
              </th>
              <th className="border border-gray-300 bg-green-500 p-2 text-center">
                Materials For Invoice
              </th>
              <th className="border border-gray-300 bg-red-400 p-2 text-center">
                Flat Discount
              </th>
              <th className="border border-gray-300 bg-yellow-300 p-2 text-center">
                Total For Invoice
              </th>
              <th className="border border-gray-300 bg-gray-200 p-2 text-center">
                GST
              </th>
              <th className="border border-gray-300 bg-gray-200 p-2 text-center">
                PST
              </th>
              <th className="border border-gray-300 bg-red-400 p-2 text-center">
                VAT
              </th>
            </tr>
          </thead>
          <tbody>
            {estimateData.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 text-center">
                  {row.srNo}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.tasksForEstimator}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.noDaysGanttChart1}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.noDaysGanttChart2}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.priceNegotiated}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.labourForInvoice}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.materialsForInvoice}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.flatDiscount}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.totalForInvoice}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.gst}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.pst}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {row.vat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-center text-xl font-bold">Project Summary</h2>
        <div className="overflow-auto">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                  Site Address
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {projectSummary.siteAddress1}
                </td>
                <td className="border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                  Site Address
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {projectSummary.siteAddress2}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                  Total Sale Amount
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {projectSummary.totalSaleAmount}
                </td>
                <td className="border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                  Invoice With GST
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {projectSummary.invoiceWithGST}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                  Total Cost
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {projectSummary.totalCost}
                </td>
                <td className="border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                  Discounts Given
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {projectSummary.discountsGiven}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                  Invoice Total Before GST
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {projectSummary.invoiceTotalBeforeGST}
                </td>
                <td className="border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                  Profit Projected
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {projectSummary.profitProjected}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                  GST
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {projectSummary.gst}
                </td>
                <td className="border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                  Net Gross Profit Percentage %
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {projectSummary.netGrossProfitPercentage}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
