import React from "react";
// import "./Input.css";
import { Typography } from "@material-ui/core";
import StarRatingComponent from "react-star-rating-component";

function Questions(props) {
  return (
    <div className="d-flex align-items-center">
      <Typography className="font-weight-bold p-2"
        variant="body1">{props.questions}
      </Typography>
      <StarRatingComponent name="star1"
      onStarClick={props.OnStarClick}
        starCount={5}
      value={props.value}
      />
    </div>
  )
}

export default Questions;