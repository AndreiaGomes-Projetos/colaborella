import React from "react";
import StarRatingComponent from "react-star-rating-component";
// import "./Info.css";

function Info(props) {
  var myStyle = {
    width: "200px",
    height:"200px"
  }
  return (
    <nav>
      <div className="blue-info rounded-top"></div>
      <span className="d-flex flex-column align-items-center justify-content-start px-3">
        <div className={props.className} style={myStyle}></div>
        <span className="d-flex flex-column">
          <h4 className="m-0 text-center">{props.name}</h4>
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