import * as React from "react";
import Button from "@mui/material/Button";
import { ActionButtonContainer } from "./ActionButtons.styled";
import { DeviceContext } from "../../../DeviceContext";

export default function ActionButtons() {
  const { pushActionDetail } = React.useContext(DeviceContext);

  return (
    <ActionButtonContainer>
      <Button variant="contained" onClick={() => pushActionDetail("Scan")}>
        Scan
      </Button>
      <Button variant="outlined" onClick={() => pushActionDetail("Terminate")}>
        Terminate
      </Button>
    </ActionButtonContainer>
  );
}
