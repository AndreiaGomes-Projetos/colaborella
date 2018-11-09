import React from "react";
import StarRatingComponent from "react-star-rating-component";
// import "./Info.css";

function Info(props) {
  return (
    <nav>
      <div className="blue-info rounded-top"></div>
      <span className="d-flex flex-column align-items-center justify-content-start px-3">
        <img className="img rounded-circle m-3" src={require("./images/ibm1.png")} alt="Remy Sharp" />
        <span className="d-flex flex-column">
          <h4 className="m-0">IBM Brasil</h4>
          <small className="text-center">Avaliação Média:</small>
          <StarRatingComponent name="rate2"
            editing={false}
            starCount={props.count}
            value={props.rating}
            className="d-flex flex-row-reverse justify-content-center"

          />
          <p className="text-center font-weight-bold">{props.rating}</p>
        </span>
      </span>
      <span className="d-flex justify-content-center">

      </span>
    </nav>
    
  )
}

export default Info;