import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
  row-gap: 2rem;
  max-width: 800px;
`;
