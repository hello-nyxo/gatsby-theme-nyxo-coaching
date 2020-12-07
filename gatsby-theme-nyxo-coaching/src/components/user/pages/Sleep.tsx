import SleepChart, { Night, Value } from "@components/charts/SleepChart"
import { H3 } from "@components/html/Html"
import { useGetSleep } from "@hooks/useSleep"
import { format, isDate } from "date-fns"
import React, { FC, useMemo } from "react"
import { useTable, useFlexLayout, useResizeColumns } from "react-table"
import styled from "styled-components"

const dateFormat = "dd.MM.yyyy"

const Sleep: FC = () => {
  const { data } = useGetSleep()

  const items = data?.items ? data?.items : []
  console.log(data)
  const columns = useMemo(
    () => [
      {
        Header: "Started",
        accessor: ({ startDate: date }: { startDate: string }) =>
          format(
            isDate(new Date(date)) ? new Date(date) : new Date(),
            dateFormat
          ),
        id: "startDate",
      },
      {
        Header: "End",
        accessor: ({ endDate: date }: { endDate: string }) =>
          format(
            isDate(new Date(date)) ? new Date(date) : new Date(),
            dateFormat
          ),
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
          format(
            isDate(new Date(date)) ? new Date(date) : new Date(),
            dateFormat
          ),
        id: "createdAt",
      },
      {
        Header: "Tracker",
        accessor: "sourceName",
      },
      {
        Header: "User",
        accessor: ({ user: { email } }) => email,
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
    <>
      <H3>SLEEP</H3>

      {/* <SleepChart data={items} /> */}

      <Cards>
        <Card>
          <div>Unessa (keskiarvo)</div>
          <div>{averageInBed(items)}</div>
        </Card>
      </Cards>

      <TableContainer>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </Th>
                ))}
              </tr>
            ))}
          </Thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                    )
                  })}
                </Tr>
              )
            })}
          </tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Sleep

const TableContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

const Table = styled.table`
  width: 100%;
  font-size: 0.85rem;
  table-layout: auto;
  border-collapse: collapse;
  overflow: scroll;
  height: 500px;
`

const Thead = styled.thead`
  padding: 1rem 0rem;
  text-align: left;
  box-sizing: border-box;
  border-bottom: 1px solid #e2e8f0;
  background-color: #f7fafc;
  font-family: ${({ theme }) => theme.FONT_BOLD};
  font-size: 0.75rem;
  text-transform: uppercase;
`

const Th = styled.th`
  position: sticky;
  padding: 1rem 1.5rem;
`

const Cards = styled.div`
  display: flex;
  flex-direction: row;
`

const Card = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.SECONDARY_BACKGROUND_COLOR};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.SHADOW};
  margin: 1rem 0rem;
`

const averageInBed = (night: Night[]) =>
  night
    .filter((night) => night.value === Value.InBed)
    .reduce(
      (average, value, _, { length }) => average + value.totalDuration / length,
      0
    )

const Tr = styled.tr`
  border-bottom: 1px dashed #e2e8f0;
`

const Td = styled.td`
  padding: 1rem 1.5rem;
`
