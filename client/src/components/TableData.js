import React, { Component } from 'react';
import axios from 'axios';

class TableData extends Component {

  constructor() {
    super();

    this.state = {
      data:[],
      loaded:false,
      name:"santosh"  
    }
  }
  
    async componentDidMount() {
        await axios.get('https://shrinkapi.herokuapp.com/all')
        .then(response => {
        this.setState({
          data:response.data,
          loaded:true
        })
        })
        .catch(error => console.log(error)) 
      }

    render() {
      if(this.loaded === false ) {
        return (<div><span>Loading...</span></div>);
      } else {
        return (
            <div>
                <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                    <th>Full URL</th>
                    <th>Short URL</th>
                    <th>Clicks</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                {
                this.state.data.map((data) => {
                return ( <tr>
                  <td>{ data.full } </td>
                  <td>{ "https://shrinkapi.herokuapp.com/"+data.short }</td>
                  <td> { data.clicks }</td>
                  <td> { data.getDate  }</td>
                 </tr>)
                })
                }                
                </tbody>
              </table>    
            </div>
        );
    }
  }
}


export default TableData;