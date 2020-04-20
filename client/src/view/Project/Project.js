import React, { Component } from 'react';

import './Project.css';

// Project structer fro DB
// id
// gitHub
// hiroku
// title
// category
// description
// img


class Project extends Component {

    render() {
        return (
            <div className='projCard' data-aos="fade-up">
                {/* <div className='flip-card'>
                    <div className="flip-card-inner">
                        <a target="_blank" href={this.props.projectObj.hiroku}>
                            <div className="flip-card-front"
                                style={{
                                    backgroundImage: 'url(' + this.props.projectObj.img + ')',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    borderTopLeftRadius: '15px',
                                    borderTopRightRadius: '15px',
                                    backgroundPosition: 'center'
                                    
                                }}>
                            </div>


                            {/* <div className="flip-card-back"
                                style={{
                                    backgroundColor: 'var(--secondColor)',
                                    borderTopLeftRadius: '15px',
                                    borderTopRightRadius: '15px'
                                }}>
                                <h1 style={{ fontWeight: 'bold', color: 'black' }}> {this.props.projectObj.title}</h1>
                                <h3 style={{ fontWeight: 'bold'}}>{this.props.projectObj.category}</h3>
                            </div> 
                        </a>
                    </div>
                    <a target="_blank" href={this.props.projectObj.hiroku}>
                        <div className="link"> <span className="shimmer">
                            Go To App</span></div></a>
                    <a target="_blank" href={this.props.projectObj.gitHub}>
                         <div className="link link2 ">Go To Code</div>
                         </a>
                </div>*/}
                <div className="projDesc" style={{ direction: 'ltr', opacity: '1' }}>
                    <h1 style={{ fontWeight: 'bold', color: 'var(--firstColor)' }} className="shimmer appTitle"> {this.props.projectObj.title}</h1>
                    <h3 style={{ fontWeight: 'bold', color: 'var(--secondColor)' }}>{this.props.projectObj.category}</h3>
                    {
                        this.props.projectObj.description.map((singleDesc, index) => {
                            return (
                                <h3 key={index} style={{ fontWeight: 'bold' }}>{singleDesc}</h3>
                            )
                        })
                    }
                </div>
                    <div className="imge"
                        style={{
                            backgroundImage: 'url(' + this.props.projectObj.img + ')',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            margin: 'auto'
                        }}>

                   
               
                <div className="btns">
                    <a target="_blank" href={this.props.projectObj.hiroku}>
                        <div className="link"> <span className="shimmer">
                           Read More</span></div></a>
                    <a target="_blank" href={this.props.projectObj.gitHub}>
                        <div className="link link2 ">Share</div>
                    </a>
                </div>
                </div>
            </div>


        )
    }
}


export default Project;
