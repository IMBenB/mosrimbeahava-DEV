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
// import AOS from 'aos';
import 'aos/dist/aos.css';
// import 'aos/dist/aos.css';//DB
// import branches from './view/DB/branches';
// let hostVar = '';


//components----------------------------------------------///////////////////
// import Project from './view/Project/Project';

//end - components----------------------------------------------////////////

class App extends Component {

  constructor(props) {
    super(props)


    this.state = {
      projects: [],
      hostVar: '',
      // hostVar: 'http://localhost:5000',
      navItems: [{ name: 'מוסרים באהבה', id: 2, to: "/home", className: "nav_item" },
      { name: 'אודות', id: 1, to: "/About", className: "nav_item" },
      { name: 'מידע', id: 0, to: "/", className: "nav_item" },
      { name: 'צור קשר', id: 3, to: "/Contact", className: "nav_item" }],
      // ,
      // { name: 'מנהל', id: 4, to: "/Manager", className: "nav_item" }],
      activeLink: 0,
      menuSwitch: false,
      navClass: 'navbar'
    }

    //binds///////////
    this.handleClick = this.handleClick.bind(this)
    this.savePost = this.savePost.bind(this)
    this.handleMenuSwitch = this.handleMenuSwitch.bind(this)
  }



  //////ben doing---------------------------


  savePost = (e) => {

    e.preventDefault();

    let post = {

      headerPost: e.target.headerPost.value,
      subject_sub_header: e.target.subject_sub_header.value,
      freeTextPost: e.target.freeTextPost.value,
      concept: e.target.concept.value,
      img2: e.target.img2.value

    }

    console.log(`${post.headerPost}`)

    fetch(this.state.hostVar + '/post/postCreate', {
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


    e.target.headerPost.value = '';
    e.target.subject_sub_header.value = '';
    e.target.freeTextPost.value = '';
    e.target.concept.value = '';
    e.target.img2.value = '';
  }

  //////ben done----------------------

  handleClick = id => {
    this.setState({ activeLink: id });

  };

  handleMenuSwitch = () => {
    console.log('handleMenuSwitch')
    let tempSwitch =  !this.state.menuSwitch;
    this.setState({ menuSwitch: tempSwitch });
    
    if (tempSwitch) {
      this.setState({ navClass: 'navbar navbarOpen' });
    }
    else {
      this.setState({ navClass: 'navbar' });

    }
    console.log(this.state.navClass)


  };


  render() {
    return (
      <div className="App">
        <Router>

          <nav className={this.state.navClass}>

            <ul className="navbar-nav">
              <li className="logoNav">
                <Link to="#" className="nav-linkLogo">
                  <img alt="arrow" className="navIconLogo" src="img/arrow.png" />
                  <span className="link-text logo-text">תפריט</span>
                </Link>
              </li>

              <li className={
                (1 === this.state.activeLink ? "nav-item active_item" : "nav-item")}>

                <Link to="/" className="nav-link"
                  onClick={() => { this.handleClick(1) }}>
                  <img alt="home" className="navIcon" src="img/home.svg" />
                  <span className=" link-text">מוסרים באהבה</span>
                </Link>
              </li>

              <li className={
                (2 === this.state.activeLink ? "nav-item active_item" : "nav-item")}>
                <Link to="/Contact" className="nav-link"
                  onClick={() => { this.handleClick(2) }}>
                  <img alt="chat" className="navIcon" src="img/chat.svg" />
                  <span className=" link-text">צור קשר</span>
                </Link>
              </li>
              {/* <li className={
                (3 == this.state.activeLink ? "nav-item active_item" : "nav-item")}>
                <Link to="/feed" className="nav-link"
                  onClick={() => { this.handleClick(3) }}>
                  <img className="navIcon" src="img/feed.svg" />
                  <span className=" link-text">פוסטים</span>
                </Link>
              </li> */}

              <li className={
                (4 === this.state.activeLink ? "nav-item active_item" : "nav-item")}>
                <Link to="/About" className="nav-link"
                  onClick={() => { this.handleClick(4) }}>
                  <img alt="about" className="navIcon" src="img/about.png" />
                  <span className=" link-text">אודות</span>
                </Link>
              </li>

              <li className={
                (5 === this.state.activeLink ? "nav-item active_item" : "nav-item")}>
                <Link to="/Manager" className="nav-link"
                  onClick={() => { this.handleClick(5) }}
                >
                  <img alt="about" className="navIcon" src="img/about.png" />

                  <span className=" link-text">מנהל</span>
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="navbarLeft">
            <ul className="navbar-navLeft">
              <li className="nav-itemLeft">
                <a href="www.google.com" className="fa fa-facebook nav-linkLeft navIconLeft">

                </a>
              </li>
              <li className="nav-itemLeft">
                <a href="www.google.com" className="fa fa-instagram nav-linkLeft navIconLeft">

                </a>
              </li>
              <li className="nav-itemLeft">
                <a href="www.google.com" className=" fa fa-whatsapp nav-linkLeft navIconLeft">

                </a>
              </li>

            </ul>
          </nav>
          <div className="appWrap">
            <header className="App-header">
              <div className="contact">
                <form id="topLandingForm" className="topLandingForm">

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
                {/* <Link to="#" className="fa fa-facebook"></Link>
                <Link to="#" className="fa fa-instagram"></Link>
                <Link to="#" className=" fa fa-whatsapp"></Link> */}
              </div>
            </header>
            <hr />
            <Switch>
              {/* <Route exact path="/">
             
                main
              </Route> */}
              <Route exact path="/Contact">
                <div className="contactComponent">
                  <form id="landingForm" className="landingForm">
                    <div className="formHead">יצירת קשר</div>
                    <input name="email" className="inputs" type="email" placeholder="מייל" required></input>
                    <input name="name" className="inputs" type="text" placeholder="שם" required></input>
                    <input name="phone" className="inputs" type="tel" placeholder="טלפון" required></input>
                    <textarea name="concept" className="inputs" type="text" placeholder="טקסט חופשי..."></textarea>
                    <button className="inputs submit" type="submit">שלח/י</button>

                  </form>
                </div>

              </Route>
              <Route exact path="/Manager">
                <div className="managerPage">
                  <form id="landingForm" className="landingForm" onSubmit={this.savePost}>
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
              <Route exact path="/">
                <div className="projectsFlexWrapper">

                  <div className='projCard'
                  //  data-aos="fade-up"
                  >
                    <div className="projDesc" style={{ direction: 'ltr', opacity: '1' }}>
                      <h1 style={{ fontWeight: 'bold', color: 'var(--firstColor)' }} className="shimmer appTitle">title</h1>
                      <h3 style={{ fontWeight: 'bold', color: 'var(--secondColor)' }}>category</h3>

                      <h3 style={{ fontWeight: 'bold' }}>singleDesc</h3>

                    </div>
                    <div className="imge"
                      style={{
                        backgroundColor: 'var(--firstColorOpacity)',
                        minHeight: '200px'
                      }}>

                      {/* style={{ */}
                      {/*   backgroundImage: 'url(' + this.props.projectObj.img + ')',
                    backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                     margin: 'auto'
                    }}
                     > */}



                      <div className="btns">
                        <a target="_blank" href="www.google.com">
                          <div className="link"> <span className="shimmer">
                            Read More</span></div></a>
                        <a target="_blank" href="www.google.com">
                          <div className="link link2 ">Share</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='projCard'
                  //  data-aos="fade-up"
                  >
                    <div className="projDesc" style={{ direction: 'ltr', opacity: '1' }}>
                      <h1 style={{ fontWeight: 'bold', color: 'var(--firstColor)' }} className="shimmer appTitle">title</h1>
                      <h3 style={{ fontWeight: 'bold', color: 'var(--secondColor)' }}>category</h3>

                      <h3 style={{ fontWeight: 'bold' }}>singleDesc</h3>

                    </div>
                    <div className="imge"
                      style={{
                        backgroundColor: 'var(--firstColorOpacity)',
                        minHeight: '200px'
                      }}>

                      {/* style={{ */}
                      {/*   backgroundImage: 'url(' + this.props.projectObj.img + ')',
                    backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                     margin: 'auto'
                    }}
                     > */}



                      <div className="btns">
                        <a target="_blank" href="www.google.com">
                          <div className="link"> <span className="shimmer">
                            Read More</span></div></a>
                        <a target="_blank" href="www.google.com">
                          <div className="link link2 ">Share</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='projCard'
                  //  data-aos="fade-up"
                  >
                    <div className="projDesc" style={{ direction: 'ltr', opacity: '1' }}>
                      <h1 style={{ fontWeight: 'bold', color: 'var(--firstColor)' }} className="shimmer appTitle">title</h1>
                      <h3 style={{ fontWeight: 'bold', color: 'var(--secondColor)' }}>category</h3>

                      <h3 style={{ fontWeight: 'bold' }}>singleDesc</h3>

                    </div>
                    <div className="imge"
                      style={{
                        backgroundColor: 'var(--firstColorOpacity)',
                        minHeight: '200px'
                      }}>

                      {/* style={{ */}
                      {/*   backgroundImage: 'url(' + this.props.projectObj.img + ')',
                    backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                     margin: 'auto'
                    }}
                     > */}



                      <div className="btns">
                        <a target="_blank" href="www.google.com">
                          <div className="link"> <span className="shimmer">
                            Read More</span></div></a>
                        <a target="_blank" href="www.google.com">
                          <div className="link link2 ">Share</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='projCard'
                  //  data-aos="fade-up"
                  >
                    <div className="projDesc" style={{ direction: 'ltr', opacity: '1' }}>
                      <h1 style={{ fontWeight: 'bold', color: 'var(--firstColor)' }} className="shimmer appTitle">title</h1>
                      <h3 style={{ fontWeight: 'bold', color: 'var(--secondColor)' }}>category</h3>

                      <h3 style={{ fontWeight: 'bold' }}>singleDesc</h3>

                    </div>
                    <div className="imge"
                      style={{
                        backgroundColor: 'var(--firstColorOpacity)',
                        minHeight: '200px'
                      }}>

                      {/* style={{ */}
                      {/*   backgroundImage: 'url(' + this.props.projectObj.img + ')',
                    backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                     margin: 'auto'
                    }}
                     > */}



                      <div className="btns">
                        <a target="_blank" href="www.google.com">
                          <div className="link"> <span className="shimmer">
                            Read More</span></div></a>
                        <a target="_blank" href="www.google.com">
                          <div className="link link2 ">Share</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </Route>
              <Route exact path="/about">
                <div className="aboutPage">
                  <h1> עמותת מוסרים באהבה היא עמותה ללא מטרת רווח .</h1>
                  <h2>עיקר פעילותה במתן בגדים למשפחות נזקקקות, תלושי מזון,תמיכה כלכלית .</h2>
                  <h3>
                    עמותת 'מוסרים באהבה' הוקמה על-מנת לסייע למיעוטי-היכולת בעיר

                    מטרת העל של עמותת 'מוסרים באהבה' היא בעצם להגשים את היום-יום של אנשים מעוטי-יכולת, באמצעות כמה וכמה דרכים והזדמנויות.


                    איך עושים זאת?
                    פה אנו נזדקק לעזרתכם! בגדים משומשים - כן, כן, שמעתם נכון, הבגדים האלו, שכבר אין בהם צורך - הם הגשמת חלום קטן לילד קטן, למשפחה שקשיי היום-יום מנעו ממנה את הדברים הכל-כך חשובים ובנאליים בחיים.


                    אם זה קורס באנגלית, או מוצרי חשמל ועד הדבר הכל-כך חשוב: סלי מזון וארוחות חמות בחגים.
                  </h3>
                  <h4> מוזמנים להיכנס לעמוד הפייסבוק של העמותה בקישור
                    <a href="www.google.com"> מוסרים באהבה פייסבוק </a>
                  </h4>
                </div>

              </Route>

            </Switch>


          </div>
        </Router>
      </div >

    );
  }
}

export default App;