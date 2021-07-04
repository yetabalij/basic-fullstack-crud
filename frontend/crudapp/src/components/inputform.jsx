import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  container: {
    marginTop: 40,
    marginBottom: 40,
    marginLeft: "auto",
    marginRight: "auto",
    display: "grid",
    width: "50%",
  },
  input: {
    display: "grid",
  },
  button: {
    width: "100%",
  },
}));

const InputForm = ({ status }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        {status === -1 ? <h2>Register!</h2> : <h2>Edit!</h2>}
        <form className={classes.root} noValidate autoComplete="off">
          <Input placeholder="Name" className={classes.input} />
          <Input placeholder="Price" className={classes.input} />
          <Input placeholder="Condition" className={classes.input} />
          <Input placeholder="Transmission" className={classes.input} />
          <Input placeholder="Engine Size" className={classes.input} />
          <Input placeholder="Engine Type" className={classes.input} />
          <Button className={classes.button}>Register</Button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
