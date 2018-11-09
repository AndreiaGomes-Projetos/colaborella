import React from "react";
import "./Aside.css";
import { Avatar } from "@material-ui/core";

function Sugestions(props) {
  return (
    <React.Fragment>
      <Avatar alt="photo" src={props.src} className="border m-3" />
    </React.Fragment>
  )
}

function Companies() {
  return (
    <React.Fragment>
       <h3 className="follow text-center font-weight-bold">Ranking de melhores empresas em diversidade:</h3>
      <span className="d-flex flex-wrap">
        <Sugestions src={require("./images/ibm1.png")} />
        <Sugestions src={require("./images/loggi1.png")} />
        <Sugestions src={require("./images/gft1.png")} />
        <Sugestions src={require("./images/creditas1.jpg")} />
        <Sugestions src={require("./images/dasa1.JPG")} />
        <Sugestions src={require("./images/drumwave.JPG")} />
        <Sugestions src={require("./images/tivit.JPG")} />
        <Sugestions src={require("./images/f-camara.png")} />
        <Sugestions src={require("./images/avanade.JPG")} />
        <Sugestions src={require("./images/stefanini.png")} />
        <Sugestions src={require("./images/inovabra.jpg")} />
        <Sugestions src={require("./images/accenture.jpg")} />
      </span>
    
    </React.Fragment>
  )
}

export default Companies;