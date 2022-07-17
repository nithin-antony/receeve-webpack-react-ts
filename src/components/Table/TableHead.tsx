import React from 'react'

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr className="table_row-header">
        {columns.map(({ label, accessor }) => {
          return <th key={accessor}>{label}</th>
        })}
      </tr>
    </thead>
  )
}

export default TableHead
