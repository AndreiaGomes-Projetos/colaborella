import React, { Component } from "react";
import Input from "./Input";
import "./App.css";
import Buttons from "./Buttons";
import { Grid, Paper } from "@material-ui/core";
import MessageCard from "./MessageCard";
import Header from "./Header";
import Companies from "./Aside";
import Info from "./Info";
import Questions from "./Questions";
// import StarRatingComponent from "react-star-rating-component";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: [],
      message: "",
      rating: 0
    }
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleClick = this.HandleClick.bind(this);
    this.OnStarClick = this.OnStarClick.bind(this);
  }

  HandleInputChange(event) {
    let message = event.target.value;
    this.setState({
      message: message
    });
  }

  HandleClick() {
    this.setState((prevState) => {
      return {
        post: prevState.post.concat([{ message: prevState.message, rating: prevState.rating}]).reverse(),
        message: "",
        rating: 0
      };
    });
  }

  OnStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className="m-3">
              <Info />
            </Paper>
            
          </Grid>
          <Grid item xs={12} md={6} >
            <Paper className="d-flex flex-column align-items-center my-3">
              <Input  value={this.state.message}
                      onChange={event => {
                        this.HandleInputChange(event)
                      }}
              />
              <Questions  OnStarClick={this.OnStarClick}
                          value={this.state.rating}
                          questions="Você recomendaria esta empresa?"
              />
              <Buttons  variant="raised"
                        color="primary"
                        size="small"
                        onClick={event => {
                          this.HandleClick(event);
                         }}
                        name={"Postar Avaliação"}
              />
            </Paper>
            
            <MessageCard posts={this.state.post} />
           
            </Grid>
            <Grid item xs={12} md={3} className="">
              <Paper className="d-flex flex-column align-items-center m-3">
                <Companies />
              </Paper>
            
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

export default App;
