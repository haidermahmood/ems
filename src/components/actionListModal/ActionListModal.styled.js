import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: "paper";
  border: 2px solid #000;
  box-shadow: 24;
  padding: 4px;
  width: 800px;
  background: white;
`;

export const ToggleButton = styled(Button)`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  background: #999999;
  color: white;

  :hover {
    background: #666666;
  }
`;
