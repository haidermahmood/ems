import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

export const DeviceCard = styled(({ isSelected, ...props }) => (
  <Card {...props} />
))`
  width: 240px;
  cursor: pointer;
  background: ${(props) => (props?.isSelected ? "lightskyblue" : "white")};
`;

export const DeviceCardContent = styled(CardContent)``;

export const Title = styled(Typography)`
  font-size: 16px;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Row = styled(Box)`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  margin-bottom: 0.5rem;
`;

export const Label = styled(Box)`
  font-weight: bold;
  flex-grow: 1;
  flex-basis: 0;
`;

export const Text = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
`;
