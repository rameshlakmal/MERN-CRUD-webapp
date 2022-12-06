import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <NavBar/>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/add" Component={CreatePost}></Route>
          <Route path="/edit:id" Component={EditPost}></Route>
          <Route path="/post/:id" Component={PostDetails}></Route>
        </div>
      </BrowserRouter>
    )
  }
}