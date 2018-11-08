import React from "react";
import "./Aside.css";
import { Avatar } from "@material-ui/core";
import Buttons from "./Buttons";

function Sugestions(props) {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center mx-2">
        <Avatar alt="photo" src={props.src} />
        
          <p className="follow-options font-weight-bold m-0 px-1">{props.name}</p>
          <small className="follow-options m-0 px-1">{props.nick}</small>
        
      </div>
      <Buttons  variant="outlined"
                color="primary"
                size="small"
                name="Seguir"
                className="p-0"
      />
    </React.Fragment>
  )
}

function Follow() {
  return (
    <React.Fragment>
      <span className="d-flex m-2">
       <h3 className="follow font-weight-bold">Quem seguir</h3>
        <p className="follow-see-more mx-2">Atualizar</p>
        <p className="follow-see-more">Ver todos</p>
      </span>
      <Sugestions src={require("./img/sadness.jpg")} name={"Tristeza"} nick={"@sadness"} label={"Seguir"} />
      <Sugestions src={require("./img/fear.jpg")} name={"Medo"} nick={"@fear"} label={"Seguir"} />
      <Sugestions src={require("./img/disgust.jpg")} name={"Nojinho"} nick={"@disgust"} label={"Seguir"} />
      <Sugestions src={require("./img/anger.jpg")} name={"Raiva"} nick={"@anger"} label={"Seguir"} />
    </React.Fragment>
  )
}

export default Follow