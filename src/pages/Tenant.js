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
  Paper,
} from "@arisglobal/agcp-ui";
import { Link } from "react-router-dom";
import constants from "../utils/constants";

import { Box, Grid, Typography } from "@mui/material";

export const Tenant = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tenants, setTenants] = useState({});
  const [parentData, setParentData] = useState({});
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(2);

  // fetched tenant details
  const fetchTenantList = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(`${constants.API_URL}/rest/all`, {
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const tenantData = await response.json();
      setTenants(tenantData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTenantList();
  }, [fetchTenantList]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const getStripedStyle = (index) => {
    return { background: index % 2 ? "#e1e1e1" : "white" };
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
  if (loading) {
    return <p> Loading... </p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  } else {
    return (
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="general-container"
        sx={{ flexGrow: 1 }}
        position="static"
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
              <Link to="/">Close</Link>
            </Button>
          </Grid>

          <Grid item xs={12} style={{ height: 500, width: "100%" }}>
            <TableContainer component={Paper}>
              <Table stickyHeader aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="cellHeader">Tenant ID</TableCell>
                    <TableCell className="cellHeader">Tenant Name</TableCell>
                    <TableCell className="cellHeader">Status</TableCell>
                    <TableCell className="cellHeader">Description</TableCell>
                    <TableCell className="cellHeader">Date Created</TableCell>
                    <TableCell className="cellHeader">Date Modified</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(tenants).map(([key, row]) => (
                    <TableRow
                      key={key}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      style={{
                        padding: "5px 20px",
                        height: 25,
                        ...getStripedStyle(key),
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Link to={{ pathname: "/tenant", state: tenants }}>
                          {" "}
                          {row.tenantId}
                        </Link>
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.createdOn}</TableCell>
                      <TableCell>{row.lastModifiedOn}</TableCell>
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
  }
};
