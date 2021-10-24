import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useCallback, useState } from "react"
import styled from "styled-components"
import { Memo } from "../components/Memo"
import sampleTableData from "../assets/data/sample-table-data.json"
import { HeavyTableRow } from "../components/HeavyTable/HeavyTableRow"

export type ItemType = typeof sampleTableData.data[0]

export const HeavyTable = () => {
  const sampleData = sampleTableData.data
  const generatedData = Array(200)
    .fill(0)
    .map(() => sampleData[Math.round(Math.random() * sampleData.length - 1)])
    .filter((item) => !!item)
  const [data, setData] = useState(generatedData)

  const handleFieldChange = useCallback((index: number, field: string, value: string) => {
    setData((prevData) => prevData.map((item, idx) => (idx === index ? { ...item, [field]: value } : item)))
  }, [])

  return (
    <Root>
      <Table>
        <Memo>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Prop 1</TableCell>
              <TableCell>Prop 2</TableCell>
              <TableCell>Prop 3</TableCell>
              <TableCell>Prop 4</TableCell>
              <TableCell>Prop 5</TableCell>
              <TableCell>Prop 6</TableCell>
              <TableCell>Prop 7</TableCell>
              <TableCell>Prop 8</TableCell>
              <TableCell>Prop 9</TableCell>
              <TableCell>Prop 10</TableCell>
              <TableCell>Prop 11</TableCell>
              <TableCell>Prop 12</TableCell>
              <TableCell>Prop 13</TableCell>
              <TableCell>Prop 14</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
        </Memo>
        <TableBody>
          {data.map((item, index) => (
            <Memo deps={[data[index]]}>
              <HeavyTableRow key={index} rowData={item} index={index} handleFieldChange={handleFieldChange} />
            </Memo>
          ))}
        </TableBody>
      </Table>
    </Root>
  )
}

const Root = styled.div`
  padding: 32px;
`
