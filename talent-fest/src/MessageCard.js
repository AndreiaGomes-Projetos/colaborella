import React from "react";
import "./MessageCard.css";
import { Card } from "@material-ui/core";
// import PropTypes from "prop-types";

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
          <div className="card-tweet d-flex align-items-center border rounded m-2">
            <Card className="m-2 p-2">
              <EachTweet message={post.message}
                         key={index} />
            </Card>
          </div>
        )
      })
      }
    </React.Fragment>
  )
}

export default MessageCard;