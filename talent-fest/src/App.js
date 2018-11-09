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
      rating: 0,
      media: 0,
      image: "ibm",
      name: "IBM Brasil"
    }
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleClick = this.HandleClick.bind(this);
    this.OnStarClick = this.OnStarClick.bind(this);
    this.HandleCompanies = this.HandleCompanies.bind(this);
  }
  
  HandleInputChange(event) {
    let message = event.target.value;
    this.setState({
      message: message
    });
  }

  HandleClick() {
    this.setState((prevState) => {
      const newPostsArray = prevState.post.concat([{
        message: prevState.message,
        rating: prevState.rating
      }]).reverse();

      const ratingSum = newPostsArray.reduce((acc, next) => acc + parseInt(next.rating), 0);
      const ratingAvg = ratingSum / newPostsArray.length;
      console.log(ratingAvg);
      return {
        post: newPostsArray,
        media: ratingAvg.toFixed(1),
        message: "",
        rating: 0
      };
    });
  }

  HandleCompanies(event) {
    let image = event.target.className;
    let name = event.target.name;
    this.setState({
      image: image,
      name: name,
      post: [],
      raiting: 0
    })
  }

  OnStarClick(nextValue, prevValue, name) {
    this.setState({
      rating: nextValue
    });
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
              <Info rating={this.state.media} className={this.state.image} name={this.state.name} />
            </Paper>
            
          </Grid>
          <Grid item xs={12} md={6} >
            <Paper className="d-flex flex-column align-items-center mt-3">
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
              <Companies onClick={this.HandleCompanies} className />
              </Paper>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

export default App;
