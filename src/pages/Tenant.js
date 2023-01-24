import React, { useState, useEffect, useCallback } from "react";
import {
  DataGrid,
  Button,
  Alert,
  Snackbar,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  TablePagination,
  Paper
} from "@arisglobal/agcp-ui";

import { Box, Grid, Typography } from "@mui/material";

export const Tenant = ({ tenants }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [tenant, setTenant] = useState({});
  const [parentData, setParentData] = useState({});
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    event.preventDefault();
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(tenants);
  };


  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="general-container"
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={3} sx={{ mb: 2, pb: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography>Tenant</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", mb: 1, mx: 1 }}
            onClick={(e) => onSubmitHandler(e)}
          >
            Create
          </Button>
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize", mb: 1, mx: 1 }}
            onClick={(e) => onSubmitHandler(e)}
          >
            Close
          </Button>
        </Grid>

        <Grid item xs={12} style={{ height: 500, width: "100%" }}>
          <TableContainer component={Paper}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Tenant ID</TableCell>
                  <TableCell>Tenant Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Date Created</TableCell>
                  <TableCell>Date Modified</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(tenants).map(([key,row]) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.tenantId}
                    </TableCell>
                    <TableCell >{row.name}</TableCell>
                    <TableCell >{row.status}</TableCell>
                    <TableCell >{row.description}</TableCell>
                    <TableCell >{row.createdOn}</TableCell>
                    <TableCell >{row.lastModifiedOn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
