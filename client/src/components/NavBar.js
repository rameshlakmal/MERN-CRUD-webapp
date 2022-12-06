import React,{Component} from 'react';
import './styles.css';



export default class NavBar extends Component{
    render(){
      return(
          
           <nav className="navbar navbar-expand-sm navbar-light">
              <a className="navbar-brand pl-5" href="#"><b>MERN CRUD</b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-5 pl-5">
                  <li className="nav-item">
                    <a className="nav-link" href="/">&nbsp;&nbsp;All Posts&nbsp;&nbsp;</a>
                  </li>

                  <li className="nav-item pl-3">
                    <a className="nav-link" href="/add">&nbsp;&nbsp;Create New&nbsp;&nbsp;</a>
                  </li>
                </ul>

                <form className="form-inline my-2 my-lg-0 mr-5 pr-5">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
          
      )
    }
  }