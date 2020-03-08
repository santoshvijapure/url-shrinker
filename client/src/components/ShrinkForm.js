import React, { Component } from 'react'
import axios from 'axios';
import validator from 'validator';

export default class ShrinkForm extends Component {

    state = {
        url: '',
        link: ''
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
            axios.post('http://localhost:8000/shrink', {
                "fullUrl": this.state.url
            })
                .then(res => {
                    this.setState({
                        link: `http://localhost:8000/${res.data.short}`
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
            <div className="container">
            <div className="jumbotron">
            <fieldset>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control mr-2" name="text" type="url"
                           placeholder="enter the URL"
                               onChange={this.handleChange}
                           />

                    <input className="form-control" type="submit" value="shrink"/>
               </form>
            </fieldset>
              <fieldset>
                <span id="result">{this.state.link }</span>
              </fieldset>
            </div>
            </div>
        )
    }
}
