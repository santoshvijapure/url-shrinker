import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap'
import ShrinkForm from "./components/ShrinkForm";
import Navbar from "./components/Navbar";
import TableData from "./components/TableData";
function App() {
  return (
    <div className="App" class="container">
    <Navbar/>
    <ShrinkForm/>
    <TableData/>

    </div>
  );
}

export default App;
