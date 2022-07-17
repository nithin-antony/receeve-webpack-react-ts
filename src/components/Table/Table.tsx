import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'

export const Table = ({ tableData, columns }) => {
  return (
    <table className="custom-table">
      <TableHead columns={columns} />
      <TableBody columns={columns} tableData={tableData} />
    </table>
  )
}
