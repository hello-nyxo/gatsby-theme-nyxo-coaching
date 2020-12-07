import { useListUsers } from "@hooks/useUsers"
import React, { FC, useMemo } from "react"
import { useTable } from "react-table"
import styled from "styled-components"

const dateFormat = "dd.MM.yyyy"

export const CoacheeTable: FC = () => {
  const { data } = useListUsers()
  const items = data?.items ? data?.items : []
  const columns = useMemo(
    () => [
      {
        Header: "Email",
        accessor: "email",
        id: "email",
      },
    ],

    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: items,
  })

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </Thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

const Table = styled.table`
  width: 100%;
`

const Thead = styled.thead`
  padding: 1rem 0rem;
`
