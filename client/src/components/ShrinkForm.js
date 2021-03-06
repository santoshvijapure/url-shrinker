import React, { Component } from 'react'
import axios from 'axios';
import validator from 'validator';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class ShrinkForm extends Component {

    state = {
        url: '',
        link: '',
        resultStatus:false
    };

    handleChange = (e) => {        
        this.setState({
          url: e.target.value
      })
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        const validURL = validator.isURL(this.state.url, {
            require_protocol: true
        });
        if (!validURL) {
            alert('Please ensure the url is correct and includes the http(s) protocol.');
        } else{
            console.log('URL is: ', this.state.url);
            // Post values
            axios.post('https://shrinkapi.herokuapp.com/shrink', {
                "fullUrl": this.state.url
            })
                .then(res => {
                    this.setState({
                        link: `https://shrinkapi.herokuapp.com/${res.data.short}`,
                        resultStatus: true
                    })
                    console.log(res.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }


    render() {
        return (
            <div className="page1 container-fluid" >
            <h1 className="text text-center"> URL SHRINKER</h1>  
                <h2>A simple and poweerful URL management tool.</h2>
                <br/>
            <fieldset>
                <form onSubmit={this.handleSubmit}>
               <div className="row">
                    <div className="col-10">
                    <input className="form-control text-field mr-2" name="text" type="url"
                           placeholder="Enter / Paste the loooooong Link including the http or https"
                               onChange={this.handleChange}
                           />
                    </div>
                    <div className="col-2">
                    <input className="btn btn-primary" type="submit" value="shrink"/>
                    </div>
               </div>     
               </form>
            </fieldset>
            <br/>
              <fieldset>

              <CopyToClipboard text={this.state.link}
          onCopy={() => alert("copied to Clipboard!!! ")}>
                <span id="result" style={{visibility: this.state.resultStatus ? 'visible' : 'hidden' }} > 
                {this.state.link  } <img src="../url_logo.png" alt="copy url" className=" copy-img"></img>
                </span>
                </CopyToClipboard>
              </fieldset>
          
            </div>
        )
    }
}
