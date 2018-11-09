import React from "react";
import "./MessageCard.css";
import { Card } from "@material-ui/core";
// import PropTypes from "prop-types";
import StarRatingComponent from "react-star-rating-component";

function EachTweet(props) {
  return (
    <React.Fragment>
      <p className="m-0">{props.message}</p>
    </React.Fragment>
  )
}

function MessageCard(props) {
  return (
    <React.Fragment>
      {props.posts.map((post, index) => {
        return (
          <div className="card-tweet d-flex align-items-center justify-content-center rounded m-2">
            <Card className="m-2 p-2 message card-tweet">
              <EachTweet message={post.message}
                         key={index} />
              <StarRatingComponent  name="rate2"
                                    editing={false}
                                    starCount={5}
                                    value={post.rating}

              />
            </Card>
          </div>
        )
      })
      }
    </React.Fragment>
  )
}

export default MessageCard;