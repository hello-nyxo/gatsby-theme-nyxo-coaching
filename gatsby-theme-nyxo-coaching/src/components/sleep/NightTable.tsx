import styled from "styled-components"
import { useGetSleep } from "@hooks/useSleep"
import { useRelativeFormat } from "@hooks/useTime"
import { useI18next } from "gatsby-plugin-react-i18next"
import React, { FC, useMemo } from "react"
import { useTable, useFlexLayout, useResizeColumns } from "react-table"

export const NightTable: FC = () => {
  const { data, isLoading } = useGetSleep()
  const relativeFormat = useRelativeFormat()
  const { t } = useI18next()
  const items = data?.items ? data?.items : []

  console.log(data)
  const columns = useMemo(
    () => [
      {
        Header: "Started",
        accessor: ({ startDate: date }: { startDate: string }) =>
          relativeFormat(new Date(date), new Date()),
        id: "startDate",
      },
      {
        Header: "End",
        accessor: ({ endDate: date }: { endDate: string }) =>
          relativeFormat(new Date(date), new Date()),
        id: "endDate",
      },
      {
        Header: "Type",
        accessor: "value",
        id: "value",
      },
      {
        Header: "createdAt",
        accessor: ({ createdAt: date }: { createdAt: string }) =>
          relativeFormat(new Date(date), new Date()),
        id: "createdAt",
      },
      {
        Header: "Tracker",
        accessor: "sourceName",
      },
      {
        Header: "User",
        accessor: ({ user }) => user.email,
        id: "user",
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
  } = useTable(
    {
      columns,
      data: items,
    },
    useFlexLayout,
    useResizeColumns
  )

  return (
    <TableContainer>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...rest } = headerGroup.getHeaderGroupProps()
            return (
              <tr key={key} {...rest}>
                {headerGroup.headers.map((column) => {
                  const { key, ...rest } = column.getHeaderProps()
                  return (
                    <Th key={key} {...rest}>
                      {column.render("Header")}
                    </Th>
                  )
                })}
              </tr>
            )
          })}
        </Thead>

        <tbody {...getTableBodyProps()}>
          {/* {isLoading ? <div>{t("LOADING_DATA")}</div> : null} */}
          {rows.map((row) => {
            prepareRow(row)
            const { key, ...rest } = row.getRowProps()
            return (
              <Tr key={key} {...rest}>
                {row.cells.map((cell) => {
                  const { key, ...rest } = cell.getCellProps()
                  return (
                    <Td key={key} {...rest}>
                      {cell.render("Cell")}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </tbody>
      </Table>
    </TableContainer>
  )
}

const TableContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

const Table = styled.table``

const Thead = styled.thead`
  padding: 1rem 0rem;
  text-align: left;
  box-sizing: border-box;
  border-bottom: 1px solid #e2e8f0;
  background-color: #f7fafc;
  font-family: ${({ theme }) => theme.fontBold};
  font-size: 0.75rem;
  text-transform: uppercase;
`

const Th = styled.th`
  position: sticky;
  padding: 1rem 1.5rem;
`

const Tr = styled.tr`
  border-bottom: 1px dashed #e2e8f0;
`

const Td = styled.td`
  padding: 1rem 1.5rem;
`
