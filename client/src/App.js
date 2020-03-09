import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap'
import ShrinkForm from "./components/ShrinkForm";
import Navbar from "./components/NavbarClass";
import TableData from "./components/TableData";
import Footer from "./components/footer";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="App" class="container">
      {/* <ShrinkForm/> */}
      <TableData/>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
