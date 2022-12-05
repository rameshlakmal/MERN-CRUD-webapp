import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      posts:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/posts").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}


  render(){
    return(
      <div className='container'>
        <h2 className='text-center'>All Posts</h2>
        <table className='table table-hover mt-5'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Topic</th>
              <th scope='col'>Description</th>
              <th scope='col'>Post Category</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr>
                <th scope="row">{index+1}</th>
                <td>{posts.topic}</td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <a className='btn btn-warning' href="#">
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a className='btn btn-danger' href="#">
                  <i class="fa-regular fa-trash-can"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
      </div>
    )
  }
}