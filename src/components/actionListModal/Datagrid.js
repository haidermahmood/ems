import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeviceContext } from "../../DeviceContext";

const columns = [
  { field: "id", headerName: "S.No.", width: 70 },
  {
    field: "actionName",
    headerName: "Action",
    width: 100,
  },
  {
    field: "deviceNames",
    headerName: "Devices",
    width: 400,
  },
  {
    field: "datetimeFormated",
    headerName: "Time",
    width: 220,
  },
];

export default function DataGridDevices() {
  const { actionItems } = React.useContext(DeviceContext);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={actionItems}
        columns={columns}
        getRowHeight={({ id, densityFactor, model: { deviceNames } }) => {
          console.log(deviceNames.length);
          return (deviceNames.length / 40) * 52;
        }}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell": {
            whiteSpace: "break-spaces",
          },
        }}
      />
    </div>
  );
}
