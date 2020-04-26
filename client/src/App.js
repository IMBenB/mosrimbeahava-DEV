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
      hostVar: 'http://localhost:5000',
      navItems: [{ name: 'מוסרים באהבה', id: 2, to: "/home", className: "nav_item" },
      { name: 'אודות', id: 1, to: "/About", className: "nav_item" },
      { name: 'מידע', id: 0, to: "/", className: "nav_item" },
      { name: 'צור קשר', id: 3, to: "/Contact", className: "nav_item" },
      { name: 'מנהל', id: 4, to: "/Manager", className: "nav_item" }],
      activeLink: 0,
   
    }
    //get branches from DB

    //binds///////////
    this.handleClick = this.handleClick.bind(this)
    this.savePost = this.savePost.bind(this)
  }



  //////ben doing---------------------------


  savePost = (e) => {
   
   
        
        let post = {

          headerPost: e.target.headerPost.value,
          subject_sub_header: e.target.subject_sub_header.value,
          freeTextPost: e.target.freeTextPost.value,
          concept: e.target.concept.value,
          img2: e.target.img2.value

        }

    console.log(`${post.headerPost}`)
    // let post ={
    //   headerPost= e.target.headerPost.value

    // };
   
      fetch(this.state.hostVar+'/post/postCreate'  , {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json'
        }
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
              <li className="logoNav">
                <Link to="#" className="nav-link">
                  <img className="navIconLogo" src="img/arrow.png" />

                  <span className="link-text logo-text">תפריט</span>
                </Link>
              </li>

              <li className={
                (1 == this.state.activeLink ? "nav-item active_item" : "nav-item")}>

                <Link to="/home" className="nav-link"
                  onClick={() => { this.handleClick(1) }}>
                  <span className=" link-text">מוסרים באהבה</span>

                  <img className="navIcon" src="img/home.svg" />
                </Link>
              </li>

              <li className={
                (2 == this.state.activeLink ? "nav-item active_item" : "nav-item")}>
                <Link to="/Contact" className="nav-link"
                  onClick={() => { this.handleClick(2) }}
                >
                  <span className=" link-text">צור קשר</span>

                  <img className="navIcon" src="img/chat.svg" />


                </Link>
              </li>

              <li className={
                (3 == this.state.activeLink ? "nav-item active_item" : "nav-item")}>
                <Link to="/feed" className="nav-link"
                  onClick={() => { this.handleClick(3) }}
                >
                  <span className=" link-text">מידע</span>

                  <img className="navIcon" src="img/feed.svg" />

                </Link>
              </li>

              <li className={
                (4 == this.state.activeLink ? "nav-item active_item" : "nav-item")}>
                <Link to="/About" className="nav-link"
                  onClick={() => { this.handleClick(4) }}
                >
                  <span className=" link-text">אודות</span>
                  <img className="navIcon" src="img/about.png" />


                </Link>
              </li>

              <li className={
                (5 == this.state.activeLink ? "nav-item active_item" : "nav-item")}>
                <Link to="/Manager" className="nav-link"
                  onClick={() => { this.handleClick(5) }}
                >
                  <span className=" link-text">
                    מנהל</span>
                  <img className="navIcon" src="img/about.png" />


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