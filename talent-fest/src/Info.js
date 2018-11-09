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
      <span className="d-flex align-items-center justify-content-start px-3">
        {/* <img className="img mr-3" src={require("")} alt="Remy Sharp" /> */}
        <span>
          <h3 className="m-0">Empresa</h3>
          <small>Observações</small>
        </span>
      </span>
      <span className="d-flex justify-content-center">

      </span>
    </nav>
    
  )
}

export default Info;