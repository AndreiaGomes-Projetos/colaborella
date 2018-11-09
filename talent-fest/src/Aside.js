import React from "react";
import "./Aside.css";
import { Avatar } from "@material-ui/core";
import Buttons from "./Buttons";

function Sugestions(props) {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center">
        <Avatar alt="photo" src={props.src} />
        <p className="follow-options font-weight-bold m-0 px-1">{props.name}</p>
        <small className="follow-options m-0 px-1">{props.nick}</small>
      </div>
      <Buttons variant="outlined"
        color="primary"
        size="small"
        name="Avaliar"
        className="p-0"
      />
    </React.Fragment>
  )
}

function Follow() {
  return (
    <React.Fragment>
      <span className="d-flex m-2">
       <h3 className="follow font-weight-bold">Empresas avaliadas:</h3>
      </span>
      <Sugestions src={require("./images/ibm1.png")} />
      <Sugestions src={require("./images/loggi1.png")} />
      <Sugestions src={require("./images/gft1.png")} />
      <Sugestions src={require("./images/creditas1.jpg")} />
    </React.Fragment>
  )
}

export default Follow