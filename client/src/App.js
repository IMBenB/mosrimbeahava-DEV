import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import {Router, Route, Link}from 'react-router';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import '../node_modules/AOS/dist/aos.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import 'aos/dist/aos.css';//DB
// import branches from './view/DB/branches';
// let hostVar = '';


//components----------------------------------------------///////////////////
import Project from './view/Project/Project';

//end - components----------------------------------------------////////////

class App extends Component {

  constructor(props) {
    super(props)


    this.state = {
      projects: [],
      // hostVar  : '',
      hostVar: 'http://localhost:4000',
      navItems: [{ name: 'מוסרים באהבה', id: 2, to: "/home", className: "nav_item" },
      { name: 'אודות', id: 1, to: "/About", className: "nav_item" },
      { name: 'מידע', id: 0, to: "/", className: "nav_item" },
      { name: 'צור קשר', id: 3, to: "/Contact", className: "nav_item" },
      { name: 'מנהל', id: 4, to: "/Manager", className: "nav_item" }],
      activeLink: 0,
      // ben-----------------------
      headerPost:'test'
      // ben end--------------------
    }
    //get branches from DB

    //binds///////////
    this.handleClick = this.handleClick.bind(this)
    this.savePost = this.savePost.bind(this)
  }



//////ben doing---------------------------

// class posting extends Component {
//   state = {
//     headerPost: '',
//     // subject_sub_header: '',
//     // freeTextPost: '',
//     // concept: '',
//     // img2: '',
      
//   }

  savePost = (e) => {
    e.preventDefault();
    let post ={

    headerPost: this.state.headerPost

    }
    console.log(post)
  // let post ={
  //   headerPost= e.target.headerPost.value
  
  // };
    
    fetch('http://localhost:5000/post/postCreate', {
      method: 'POST',
          body: JSON.stringify(post),
          headers: {
            'Content-Type': 'application/json'
          }
      // headerPost: this.state.headerPost,
      // subject_sub_header: this.state.subject_sub_header,
      // freeTextPost: this.state.freeTextPost,
      // concept: this.state.concept,
      // img2: this.state.img2
      
    })
    
        .then((response) => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    
      }  

//////ben done----------------------
  componentDidMount() {
    AOS.init({
      duration: 1100,
    })
    console.log(window.location.origin)
    fetch(this.state.hostVar + "/getProjects",
      {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(result => {
      result.json().then(doc => {
        console.dir(doc);
        this.setState({ projects: doc })
      })
    }

    )
  }
  handleClick = id => {
    this.setState({ activeLink: id });
  };

  render() {
    return (
      <div className="App">
        <Router>


          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="logo">
                <Link to="#" className="nav-link">
                  <span className="link-text logo-text">תפריט</span>
                  <img className="navIconLogo" src="img/arrow.png" />



                  {/* <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fad"
                    data-icon="angle-double-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                  >
                    <g className="fa-group">
                      <path
                        fill="currentColor"
                        d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                        className="fa-secondary"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                        className="fa-primary"
                      ></path>
                    </g>
                  </svg> */}
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/home" className="nav-link"
                  onClick={() => { this.handleClick(1) }}>
                  <img
                    className={
                      (1 == this.state.activeLink ? "navIcon active_item" : "navIcon")}
                    src="img/home.svg" />

                  <span className={
                    (1 == this.state.activeLink ? "link-text active_item" : "link-text")}>מוסרים באהבה</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Contact" className="nav-link"
                  onClick={() => { this.handleClick(2) }}
                >
                  <img className={
                    (2 == this.state.activeLink ? "navIcon active_item" : "navIcon")} src="img/chat.svg" />


                  <span className={
                    (2 == this.state.activeLink ? "link-text active_item" : "link-text")}>צור קשר</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/feed" className="nav-link"
                  onClick={() => { this.handleClick(3) }}
                >
                  <img className={
                    (3 == this.state.activeLink ? "navIcon active_item" : "navIcon")} src="img/feed.svg" />

                  <span className={
                    (3 == this.state.activeLink ? "link-text active_item" : "link-text")}>מידע</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/About" className="nav-link"
                  onClick={() => { this.handleClick(4) }}
                >
                  <img className={
                    (4 == this.state.activeLink ? "navIcon active_item" : "navIcon")} src="img/about.png" />

                  <span className={
                    (4 == this.state.activeLink ? "link-text active_item" : "link-text")}>אודות</span>
                </Link>
              </li>

              <li className="nav-item" id="themeButton">
                <Link to="/Manager" className="nav-link"
                  onClick={() => { this.handleClick(5) }}
                >

                  <img className={
                    (5 == this.state.activeLink ? "navIcon active_item" : "navIcon")} src="img/about.png" />

                  <span className={
                    (5 == this.state.activeLink ? "link-text active_item" : "link-text")}>
                       מנהל</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="appWrap">
            <header className="App-header">
              <div className="contact">
                <form id="landingForm" className="landingForm">

                  <div className="call"> 055-558-4718 &#9742;</div>
                  <input name="email" className="inputsHeader" type="email" placeholder="מייל" required></input>
                  <input name="name" className="inputsHeader" type="text" placeholder="שם" required></input>
                  <input name="phone" className="inputsHeader" type="tel" placeholder="טלפון" required></input>
                  <textarea name="concept" className="inputsHeader" type="text" placeholder="טקסט חופשי..."></textarea>
                  <button className="inputsHeader submit" type="submit">שלח/י</button>

                </form>
              </div>

              <div className="logoHeader"><img className="logoImg" src="img/mosrimLogo.png" alt="mosrim logo" /></div>
              <div className="socialLinks">
                <Link to="#" className="fa fa-facebook"></Link>
                <Link to="#" className="fa fa-instagram"></Link>
                <Link to="#" className=" fa fa-whatsapp"></Link>
              </div>
            </header>
            <hr />
            <Switch>
              <Route exact path="/">
                <div className="projectsFlexWrapper">
                  {
                    this.state.projects.map((project, index) => {
                      return (
                        <Project className="proj" key={index} projectObj={project} />
                      )
                    })
                  }

                </div>

              </Route>
              <Route exact path="/Contact">
                <div className="contactComponent">
                  <form id="landingForm" className="mainGridItem landingForm formComponent">
                    <div className="formHead">יצירת קשר</div>
                    <input name="email" className="inputs" type="email" placeholder="מייל" required></input>
                    <input name="name" className="inputs" type="text" placeholder="שם" required></input>
                    <input name="phone" className="inputs" type="tel" placeholder="טלפון" required></input>
                    <textarea name="concept" className="inputs" type="text" placeholder="טקסט חופשי..."></textarea>
                    <button className="inputs submit" type="submit">שלח/י</button>
                    <div id="thankYou" className="thankYou"></div>
                  </form>
                </div>

              </Route>
              <Route exact path="/Manager">
                <div className="managerPage">
                  <form id="landingForm" className="landingForm formComponent" onSubmit={this.savePost}>
                    <div className="formHead">הוספת פוסט חדש</div>
                    <input name="headerPost" className="inputs" type="text" placeholder="כותרת" ></input>
                    <input name="subject_sub_header" className="inputs" type="text" placeholder="נושא - כותרת משננית" ></input>
                    <input name="freeTextPost" className="inputs" type="file" placeholder="תמונה עליונה" ></input>
                    <textarea name="concept" className="inputs" type="text" placeholder="טקסט חופשי"></textarea>
                    <input name="img2" className="inputs" type="file" placeholder="תמונה משנית" ></input>

                    <button className="inputs submit" type="submit" >הוסף לעמוד המידע</button>
                    <div id="thankYou" className="thankYou"></div>
                  </form>
                </div>

              </Route>
            </Switch>


          </div>
        </Router>
      </div>

    );
  }
}

export default App;