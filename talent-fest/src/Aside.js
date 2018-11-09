import React from "react";
import "./Aside.css";

function Companies(props) {
  return (
    <React.Fragment>
       <h3 className="follow text-center font-weight-bold p-2">Melhores empresas em diversidade:</h3>
      <span className="d-flex flex-wrap justify-content-around">
        <img src={require("./images/ibm1.png")} alt="ibm" name="IBM Brasil" className="ibm avatar border m-3" onClick={props.onClick} />
        
        <img src={require("./images/loggi1.png")} alt="loggi" name="Loggi" className="loggi avatar border m-3" onClick={props.onClick} />
       
        <img src={require("./images/gft1.png")} alt="gft" name="GFT" className="gft avatar border m-3" onClick={props.onClick} />
        
        <img src={require("./images/creditas1.jpg")} alt="creditas" name="Creditas" className="creditas avatar border m-3" onClick={props.onClick} />

        <img src={require("./images/dasa1.JPG")} alt="dasa" name="Dasa" className="dasa avatar border m-3" onClick={props.onClick} />
        
        <img src={require("./images/drumwave.JPG")} alt="drumwave" name="Drumwave" className="drumwave avatar border m-3" onClick={props.onClick} />
        
        <img src={require("./images/tivit.JPG")} alt="tivit" name="Tivit" className="tivit avatar border m-3" onClick={props.onClick} />
        
        <img src={require("./images/f-camara.png")} alt="fcamara" name="FCamara" className="fcamara avatar border m-3" onClick={props.onClick} />
        
        <img src={require("./images/avanade.JPG")} alt="avanade" name="Avanade" className="avanade avatar border m-3" onClick={props.onClick} />
        
        <img src={require("./images/stefanini.png")} alt="stefanini" name="Stefanini" className="stefanini avatar border m-3" onClick={props.onClick} />
        
        <img src={require("./images/inovabra.jpg")} alt="inovabra" name="InovaBra" className="inovabra avatar border m-3" onClick={props.onClick} />
        
        <img src={require("./images/accenture.jpg")} alt="accenture" name="Accenture" className="accenture avatar border m-3" onClick={props.onClick} />
        
      </span>
    
    </React.Fragment>
  )
}

export default Companies;