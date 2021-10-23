import { Button, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"
import { Memo } from "../components/Memo"
import sampleTableData from "../assets/data/sample-table-data.json"

export const HeavyTable = () => {
  const sampleData = sampleTableData.data
  const generatedData = Array(200)
    .fill(0)
    .map(() => sampleData[Math.round(Math.random() * sampleData.length - 1)])
    .filter((item) => !!item)
  const nameOptions = sampleData.map((item) => item.name)
  const [data, setData] = useState(generatedData)
  const [isEditing, setIsEditing] = useState(Array(data.length).fill(false))

  const switchEditMode = (index: number) => {
    setIsEditing((prev) => prev.map((val, idx) => (idx === index ? !val : val)))
  }

  const handleFieldChange = (index: number, field: string, value: string) => {
    setData((prevData) => prevData.map((item, idx) => (idx === index ? { ...item, [field]: value } : item)))
  }

  return (
    <Root>
      <Table>
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
        <TableBody>
          {data.map((item, index) => (
            <Memo key={index} deps={[isEditing[index], JSON.stringify(data[index])]}>
              <TableRow hover>
                <TableCell>
                  {isEditing[index] ? (
                    <Select
                      label="Name"
                      value={item.name}
                      onChange={(e) => handleFieldChange(index, "name", e.target.value)}
                    >
                      {nameOptions.map((name, idx) => (
                        <MenuItem key={idx} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    item.name
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 1"
                      value={item.prop1}
                      onChange={(e) => handleFieldChange(index, "prop1", e.target.value)}
                    />
                  ) : (
                    item.prop1
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 2"
                      value={item.prop2}
                      onChange={(e) => handleFieldChange(index, "prop2", e.target.value)}
                    />
                  ) : (
                    item.prop2
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 3"
                      value={item.prop3}
                      onChange={(e) => handleFieldChange(index, "prop3", e.target.value)}
                    />
                  ) : (
                    item.prop3
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 4"
                      value={item.prop4}
                      onChange={(e) => handleFieldChange(index, "prop4", e.target.value)}
                    />
                  ) : (
                    item.prop4
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 5"
                      value={item.prop5}
                      onChange={(e) => handleFieldChange(index, "prop5", e.target.value)}
                    />
                  ) : (
                    item.prop5
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 6"
                      value={item.prop6}
                      onChange={(e) => handleFieldChange(index, "prop6", e.target.value)}
                    />
                  ) : (
                    item.prop6
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 7"
                      value={item.prop7}
                      onChange={(e) => handleFieldChange(index, "prop7", e.target.value)}
                    />
                  ) : (
                    item.prop7
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 8"
                      value={item.prop8}
                      onChange={(e) => handleFieldChange(index, "prop8", e.target.value)}
                    />
                  ) : (
                    item.prop8
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 9"
                      value={item.prop9}
                      onChange={(e) => handleFieldChange(index, "prop9", e.target.value)}
                    />
                  ) : (
                    item.prop9
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 10"
                      value={item.prop10}
                      onChange={(e) => handleFieldChange(index, "prop10", e.target.value)}
                    />
                  ) : (
                    item.prop10
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 11"
                      value={item.prop11}
                      onChange={(e) => handleFieldChange(index, "prop11", e.target.value)}
                    />
                  ) : (
                    item.prop11
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 12"
                      value={item.prop12}
                      onChange={(e) => handleFieldChange(index, "prop12", e.target.value)}
                    />
                  ) : (
                    item.prop12
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 13"
                      value={item.prop13}
                      onChange={(e) => handleFieldChange(index, "prop13", e.target.value)}
                    />
                  ) : (
                    item.prop13
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[index] ? (
                    <TextField
                      label="Prop 14"
                      value={item.prop14}
                      onChange={(e) => handleFieldChange(index, "prop14", e.target.value)}
                    />
                  ) : (
                    item.prop14
                  )}
                </TableCell>

                <TableCell>
                  <Button onClick={() => switchEditMode(index)} variant="contained">
                    {isEditing[index] ? "Save" : "Edit"}
                  </Button>
                </TableCell>
              </TableRow>
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
