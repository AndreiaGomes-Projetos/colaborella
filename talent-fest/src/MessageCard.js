import React from "react";
import "./MessageCard.css";
import { Card, Avatar } from "@material-ui/core";
import StarRatingComponent from "react-star-rating-component";

function EachMessage(props) {
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
          <div className="card-tweet d-flex align-items-center justify-content-center rounded my-2">
            <Card className="m-2 p-2 message card-tweet d-flex">
              <div className="d-flex ">
                <Avatar className="mr-2" src={require("./images/avatar.JPG")} />
                <p className="m-0 mr-2 font-weight-bold">Anônima:</p>
              </div>
              <div className="">
                <EachMessage message={post.message}
                  key={index} />
                <StarRatingComponent name="rate2"
                  editing={false}
                  starCount={5}
                  value={post.rating}

                />
                <div tone={props.tone}></div>
              </div>


            </Card>
          </div>
        )
      })
      }
    </React.Fragment>
  )
}

export default MessageCard;