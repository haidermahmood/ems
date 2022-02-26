import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)``;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  max-width: 800px;
  padding: 40px;
`;

export const Header = styled(Typography)`
  font-size: 24px;
  color: #333333;
  font-weight: bold;
  text-align: center;
`;
