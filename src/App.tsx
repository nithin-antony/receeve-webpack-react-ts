import React from 'react'
import { Table } from './components/Table'

import './index.scss'

export const App = () => {
  const data = [
    {
      id: 1,
      full_name: 'Wendall Gripton',
      email: 'wg@creative.org',
      gender: 'Male',
      age: 100,
      start_date: '2022-01-26',
      data: {
        name: 'nithin',
      },
    },
  ]

  const columns = [
    { label: 'Full Name', accessor: (d) => d.data.name },
    { label: 'Email', accessor: (d) => d.email },
    { label: 'Gender', accessor: (d) => d.gender },
    { label: 'Age', accessor: (d) => d.age },
    {
      label: 'Start date',
      accessor: (d) => d.start_date,
    },
  ]

  return (
    <>
      <Table tableData={data} columns={columns} />
    </>
  )
}
