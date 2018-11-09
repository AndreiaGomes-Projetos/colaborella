import React from "react";
// import "./Info.css";

// function Info2(props) {
//   return (
//     <div className="mx-2 p-1">
//       <small className="smallinfo font-weight-bold">{props.label}</small>
//       <p className="pinfo font-weight-bold m-0">{props.value}</p>
//     </div>
//   )
// }

function Info(props) {
  return (
    <nav>
      <div className="blue-info rounded-top"></div>
      <span className="d-flex flex-column align-items-center justify-content-start px-3">
        <img className="img rounded-circle m-3" src={require("./images/ibm1.png")} alt="Remy Sharp" />
        <span className="d-flex flex-column">
          <h4 className="m-0">IBM Brasil</h4>
          <small className="text-center">Avaliação Média:</small>
        </span>
      </span>
      <span className="d-flex justify-content-center">

      </span>
    </nav>
    
  )
}

export default Info;