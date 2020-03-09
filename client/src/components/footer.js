import React, { Component } from 'react';




export default class footer extends Component {
    render() {
        return (
            <div>
            <footer className="" id="social">
            <div className="footer container">
                    <div className="text-center">
                            <div className="text text-center ">
                                <a href="https://github.com/santoshvijapure" rel="noopener noreferrer" target="_blank" ><i className="fab fa-github fa-2x social"></i></a>
                                <a href="https://twitter.com/sant0shvijapure" rel="noopener noreferrer" target="_blank" ><i className="fab fa-twitter fa-2x social"></i></a>
                                <a href="https://www.linkedin.com/in/santoshvijapure/" rel="noopener noreferrer" target="_blank" ><i className="fab fa-linkedin fa-2x social"></i></a>
                                <a href="https://www.instagram.com/santosh.js/" rel="noopener noreferrer" target="_blank" ><i className="fab fa-instagram fa-2x social"></i></a>
                                <a href="mailto:Vijapuresantosh@gmail.com" rel="noopener noreferrer" target="_blank" ><i className="fa fa-envelope-square fa-2x social"></i></a>
                            </div>
                        </div>
                <hr/>
        
        <div className="row">
            <div className="col-md-6">
                
        Copyright © 2020 : <a href="https://github.com/santoshvijapure/url-shrinker/blob/master/LICENSE">Santosh Vijapure</a>
        
            </div>
            <div className="col-md-6 text-right">
                made with ♥ and Hosted on heroku
            </div>
        </div>
            </div>
        </footer>  
            </div>
      
        )
    }
}