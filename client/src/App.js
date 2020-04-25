import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
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
        <div className="appWrap">

          <Router>
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
             
              <div className="logo"><img className="logoImg" src="img/mosrimLogo.png" alt="mosrim logo" /></div>
              <div className="socialLinks">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class=" fa fa-whatsapp"></a>
              </div>
            </header>

            <div className="linksHeaderBG">
              <nav className="ff">
                {
                  this.state.navItems.map((link, index) => {
                    return (
                      <Link
                        onClick={() => { this.handleClick(link.id) }}
                        key={link.id} to={link.to}
                        className={
                          link.className +
                          (link.id === this.state.activeLink ? " active_item" : "")
                        }>{link.name}</Link>
                    )
                  })
                }
              </nav>

            </div>
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

          </Router>
        </div>

      </div>

    );
  }
}

export default App;