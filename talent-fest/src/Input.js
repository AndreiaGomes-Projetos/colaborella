import React from "react";
import "./Input.css";
import { TextField, Typography } from "@material-ui/core";
// import PropTypes from "prop-types";

function Input(props) {
  return (
    <form>
      <h5 className="text-center m-0 pt-3">Digite uma avaliação:</h5>
      <TextField  onChange={props.onChange} 
                  value={props.value} id="outlined-textarea"
                  className={props.class}
                  placeholder=""
                  variant="outlined"
                  margin="normal"
                  multiline
                  fullWidth
      />
    </form>
  )
}

export default Input;