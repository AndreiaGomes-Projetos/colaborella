import React from "react";
import "./Input.css";
import { TextField } from "@material-ui/core";
// import PropTypes from "prop-types";

function Input(props) {
  return (
    <form>
      <h5 className="text-center m-0 pt-3">Como sua empresa colabora para equidade de gênero? Nos inspire com sua história...</h5>
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