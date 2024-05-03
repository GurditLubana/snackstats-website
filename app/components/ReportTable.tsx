import React from 'react'
import { Table } from "@radix-ui/themes";


function ReportTable({reportData}:any) {
  return (
    <div>
      <Table.Root className="w-full">
        <Table.Header className="bg-slate-900 text-white">
          <Table.Row>
            <Table.ColumnHeaderCell className=" py-4 text-left text-sm font-semibold uppercase tracking-wider">Restaurant Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className=" py-4 text-center text-sm font-semibold uppercase tracking-wider">Amount Spent ($)</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className=" py-4 text-center text-sm font-semibold uppercase tracking-wider">Total Orders</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body className="bg-slate-800 divide-y divide-gray-700">
          {Object.entries(reportData)
            .filter(([restaurant]) => !['favRest', 'totalAmountSpent', 'totalOrders', 'months'].includes(restaurant))
            .map(([restaurant, data]) => (
              <Table.Row key={restaurant} className="hover:bg-slate-700 transition-colors">
                <Table.RowHeaderCell className="px-6 py-4 font-medium text-white text-left">{restaurant}</Table.RowHeaderCell>
                <Table.Cell className="px-6 py-4 text-slate-300 text-center">{"$ "+reportData[restaurant].totalSpent.toFixed(2)}</Table.Cell>
                <Table.Cell className="px-6 py-4 text-slate-300 text-center">{reportData[restaurant].visits}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default ReportTable
