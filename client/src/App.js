import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap'
import Navbar from "./components/NavbarClass";

import Footer from "./components/footer";


function App() {
  return (
    <div>
      <Navbar/>
     
      <Footer/>

    </div>
  );
}

export default App;
