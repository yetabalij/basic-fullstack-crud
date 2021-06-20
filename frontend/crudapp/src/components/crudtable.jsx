import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

import InputForm from "./inputform";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BasicTable = ({ cardata }) => {
  const classes = useStyles();
  const [loadform, setLoadForm] = useState("other");

  const tbl = cardata.map((data) => {
    return (
      <TableRow key={data.name}>
        <TableCell component="th" scope="row">
          {data.name}
        </TableCell>
        <TableCell align="right">{data.price}</TableCell>
        <TableCell align="right">{data.Condition}</TableCell>
        <TableCell align="right">{data.Transmission}</TableCell>
        <TableCell align="right">{data.enginesize}</TableCell>
        <TableCell align="right">{data.enginetype}</TableCell>
        <TableCell align="right">
          <EditIcon
            onClick={() => {
              console.log("hello ermi");
            }}
          />
        </TableCell>
        <TableCell align="right">
          <DeleteIcon
            onClick={() => {
              console.log("hello ermi");
            }}
          />
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div>
      {loadform === "other" && (
        <Button
          color={"secondary"}
          onClick={() => {
            setLoadForm("load");
          }}
        >
          Add New Car
          <AddIcon />
        </Button>
      )}

      <div>
        {loadform === "other" ? (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Car Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Condition&nbsp;</TableCell>
                  <TableCell align="right">Transmission&nbsp;</TableCell>
                  <TableCell align="right">Engine Size&nbsp;</TableCell>
                  <TableCell align="right">Engine Type&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{tbl}</TableBody>
            </Table>
          </TableContainer>
        ) : (
          <InputForm loadform={loadform} setLoadForm={setLoadForm} />
        )}
      </div>
    </div>
  );
};

export default BasicTable;
