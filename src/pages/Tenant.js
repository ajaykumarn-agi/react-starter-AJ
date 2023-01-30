import React, { useState, useEffect, useCallback } from "react";
import { atom, useRecoilState } from "recoil";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@arisglobal/agcp-ui";
import constants from "../utils/constants";
import TenantTab from "./tenants/tenantTab";
import { Box, Grid, Typography } from "@mui/material";
import DefaultTab from "./tenants/defaultTab";
const { format } = require("date-fns");

const tenantParams = atom({
  key: "tenantParams",
  default: {},
});

export const Tenant = ({ props }) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogTenant, setOpenDialogTenant] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tenants, setTenants] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [tenant, setTenant] = useState({});
  const [tenantParam, setTenantParams] = useRecoilState(tenantParams);
  const [tenantId, setTenantId] = useState(1);

  // fetched tenant details
  const fetchTenantList = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(`api/${constants.GET_TENANT}`, {
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        setError(response.statusText);
        throw new Error(response.statusText);
      }
      const tenantData = await response.json();
      setTenants(tenantData);
      setTenantParams(tenantData);
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
    setRowsPerPage(parseInt(event.target.value, 1));
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

  //Dialog function
  const handleClickOpen = () => {
    setOpenDialog(true);
    // setTenant(tenant)
  };

  const handleClickOpenTenant = (params) => {
   setTenant(params)
    setOpenDialogTenant(true);
  };
  const openDialogTenantTab = () => {
    setOpenDialogTenant(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleCloseDialogTab = () => {
    setOpenDialogTenant(false);
  };


  if (loading) {
    return <p> Loading... </p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  } else {
    return (
      <Box
        component="div"
        className="general-container"
        sx={{ flexGrow: 1 }}
        position="static"
        p="auto  "
      >
        <Grid container spacing={3} sx={{ mb: 2, pb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography>Tenants</Typography>
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
              onClick={handleClickOpen}
            >
              Create
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: "capitalize", mb: 1, mx: 1 }}
            >
              Close
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ width: "100%", overflow: "hidden" }}
            sx={{ mb: 2 }}
          >
            <TableContainer component={Paper} size="small">
              <Table stickyHeader aria-label="simple table">
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
                  {Object.entries(tenants).map(([key, row]) => (
                    <TableRow
                      key={key}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      style={{
                        padding: "5px 20px",
                        height: 10,
                        ...getStripedStyle(key),
                      }}
                    >
                      <TableCell scope="row">
                        {" "}
                        <Button
                          size="small"
                          onClick={() => handleClickOpenTenant(row)}
                        >
                          {row.tenantId}
                        </Button>
                      </TableCell>

                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>
                        {" "}
                        {format(row.createdOn, "EEE MMM dd H:mm:s yyyy")}
                      </TableCell>
                      <TableCell>
                        {" "}
                        {format(row.lastModifiedOn, "EEE MMM dd H:mm:s yyyy")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Grid>
        </Grid>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="xl"
          position="fixed"
          PaperProps={{ sx: { position: "fixed", height: 765 } }}
        >
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
          <DialogTitle>Tenants</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <DefaultTab />
            </DialogContentText>
          </DialogContent>
        </Dialog>

        {/* This is for the Tenant with id */}
        <Dialog
          fullWidth
          open={openDialogTenant}
          onClose={handleCloseDialogTab}
          maxWidth="xl"
          position="fixed"
          PaperProps={{ sx: { position: "fixed", height: 765 } }}
        >
          <DialogActions>
            <Button onClick={handleCloseDialogTab}>Close</Button>
          </DialogActions>
          <DialogTitle>Tenants</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <TenantTab tenant={tenant}  />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    );
  }
};
