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
        console.log(response.data)
        this.setState({
          data:response.data,
          loaded:true
        })
        console.log(this.state.data)
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
                  <td><a href="{ data.full }" target="_blank"> { data.full } </a></td>
                  <td><a href="{ data.short }" target="_blank"> { data.short } </a></td>
                  <td> { data.clicks }</td>
                  <td> { data.date }</td>
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