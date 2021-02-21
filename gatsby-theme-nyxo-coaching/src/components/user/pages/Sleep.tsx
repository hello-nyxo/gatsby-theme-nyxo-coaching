import { Night, Value } from "@components/charts/SleepChart"
import { H3 } from "@components/html/Html"
import { useGetSleep } from "@hooks/useSleep"
import { useRelativeFormat } from "@hooks/useTime"
import { useI18next } from "gatsby-plugin-react-i18next"
import React, { FC, useMemo } from "react"
import { useTable, useFlexLayout, useResizeColumns } from "react-table"
import tw, { styled } from "twin.macro"

const Sleep: FC = () => {
  const { data, isLoading } = useGetSleep()
  const relativeFormat = useRelativeFormat()
  const { t } = useI18next()
  const items = data?.items ? data?.items : []

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
        accessor: ({ user }: any) => user.email,
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
      <H3>{t("NAVIGATION.SLEEP")}</H3>

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
  ${tw`border-collapse table-auto w-full whitespace-nowrap bg-white relative`}
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
