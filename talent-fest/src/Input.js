import React from "react";
import "./Input.css";
import { TextField, Typography } from "@material-ui/core";
// import PropTypes from "prop-types";

function Input(props) {
  return (
    <form>
      {/* <input onChange={props.onChange} value={props.value} /> */}
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