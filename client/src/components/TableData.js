import React, { Component } from 'react';
import axios from 'axios';

class TableData extends Component {
  state = {
    data:[]
  };
    componentDidMount() {
        axios.get('http://localhost:8000/all')
        .then(response => {
          console.log(response.data)
          this.setState({
            data:response.data
        })
        })
        .catch(error => console.log(error))
      }
      handleChange=()=>{
          console.log("change");
          
      }
    render() {
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
                {/* {
                this.data.map((data) => {
                return  <tr>
                  <td><a href="{ data.full }" target="_blank"> { data.full } </a></td>
                  <td><a href="{ data.short }" target="_blank"> { data.short } </a></td>
                  <td> { data.clicks }</td>
                  <td> { data.date }</td>
                 </tr>
                })
                } */}
                </tbody>
              </table>    

            </div>
        );
    }
}

export default TableData;