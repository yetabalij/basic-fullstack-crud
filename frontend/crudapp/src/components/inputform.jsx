import React from "react";
import Button from "@material-ui/core/Button";

const InputForm = ({ setLoadForm }) => {
  console.log({ setLoadForm });
  return (
    <div>
      <h3>input form</h3>
      <Button
        color={"secondary"}
        onClick={() => {
          setLoadForm("other");
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default InputForm;
