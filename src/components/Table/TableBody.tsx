import React from 'react'

const TableBody = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id} className="table_row">
            {columns.map(({ accessor, label }) => {
              const tData = accessor(data) ? accessor(data) : '__'
              return <td key={label}>{tData}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
