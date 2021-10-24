import { TableRow, TableCell, Select, MenuItem, TextField, Button } from "@mui/material"
import { ItemType } from "../../pages/HeavyTable"
import sampleTableData from "../../assets/data/sample-table-data.json"
import { Memo } from "../Memo"
import { useState } from "react"

export type HeavyTableRowProps = {
  index: number
  rowData: ItemType
  handleFieldChange: (index: number, field: string, value: string) => void
}

export const HeavyTableRow = (props: HeavyTableRowProps) => {
  const { rowData, index, handleFieldChange } = props
  const sampleData = sampleTableData.data
  const nameOptions = sampleData.map((item) => item.name)
  const [isEditing, setIsEditing] = useState(false)

  const handleSwitchEditMode = () => setIsEditing((prev) => !prev)

  return (
    <TableRow hover>
      <Memo deps={[rowData.name, isEditing]}>
        <TableCell>
          {isEditing ? (
            <Select
              label="Name"
              value={rowData.name}
              onChange={(e) => handleFieldChange(index, "name", e.target.value)}
            >
              {nameOptions.map((name, idx) => (
                <MenuItem key={idx} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          ) : (
            rowData.name
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop1, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 1"
              value={rowData.prop1}
              onChange={(e) => handleFieldChange(index, "prop1", e.target.value)}
            />
          ) : (
            rowData.prop1
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop2, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 2"
              value={rowData.prop2}
              onChange={(e) => handleFieldChange(index, "prop2", e.target.value)}
            />
          ) : (
            rowData.prop2
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop3, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 3"
              value={rowData.prop3}
              onChange={(e) => handleFieldChange(index, "prop3", e.target.value)}
            />
          ) : (
            rowData.prop3
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop4, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 4"
              value={rowData.prop4}
              onChange={(e) => handleFieldChange(index, "prop4", e.target.value)}
            />
          ) : (
            rowData.prop4
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop5, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 5"
              value={rowData.prop5}
              onChange={(e) => handleFieldChange(index, "prop5", e.target.value)}
            />
          ) : (
            rowData.prop5
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop6, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 6"
              value={rowData.prop6}
              onChange={(e) => handleFieldChange(index, "prop6", e.target.value)}
            />
          ) : (
            rowData.prop6
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop7, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 7"
              value={rowData.prop7}
              onChange={(e) => handleFieldChange(index, "prop7", e.target.value)}
            />
          ) : (
            rowData.prop7
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop8, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 8"
              value={rowData.prop8}
              onChange={(e) => handleFieldChange(index, "prop8", e.target.value)}
            />
          ) : (
            rowData.prop8
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop9, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 9"
              value={rowData.prop9}
              onChange={(e) => handleFieldChange(index, "prop9", e.target.value)}
            />
          ) : (
            rowData.prop9
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop10, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 10"
              value={rowData.prop10}
              onChange={(e) => handleFieldChange(index, "prop10", e.target.value)}
            />
          ) : (
            rowData.prop10
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop11, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 11"
              value={rowData.prop11}
              onChange={(e) => handleFieldChange(index, "prop11", e.target.value)}
            />
          ) : (
            rowData.prop11
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop12, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 12"
              value={rowData.prop12}
              onChange={(e) => handleFieldChange(index, "prop12", e.target.value)}
            />
          ) : (
            rowData.prop12
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop13, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 13"
              value={rowData.prop13}
              onChange={(e) => handleFieldChange(index, "prop13", e.target.value)}
            />
          ) : (
            rowData.prop13
          )}
        </TableCell>
      </Memo>
      <Memo deps={[rowData.prop14, isEditing]}>
        <TableCell>
          {isEditing ? (
            <TextField
              label="Prop 14"
              value={rowData.prop14}
              onChange={(e) => handleFieldChange(index, "prop14", e.target.value)}
            />
          ) : (
            rowData.prop14
          )}
        </TableCell>
      </Memo>
      <Memo deps={[isEditing]}>
        <TableCell>
          <Button onClick={handleSwitchEditMode} variant="contained">
            {isEditing ? "Save" : "Edit"}
          </Button>
        </TableCell>
      </Memo>
    </TableRow>
  )
}
