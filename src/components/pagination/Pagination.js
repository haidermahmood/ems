import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginator({ currentPage, setCurrentPage, pageCount }) {
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {currentPage}</Typography>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
