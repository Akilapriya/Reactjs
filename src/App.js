import React from "react";
import "./App.css";
import ECommerceWeb from "./Components/ECommerceWeb";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IterateObjectByMap from "./Components/IterateObjectByMap";
import CounterInterval from "./Components/CounterIterval";

function App() {
  return (
    <>
      <div className="App">
        {/* <header className="App-header"> */}
        {/* <BrowserRouter>
      
        <Routes>
        
          <Route path="/" element={<ECommerceWeb/>}></Route>    
        
          </Routes>
          <Footer/>
          </BrowserRouter> */}
        {/* </header> */}

        <CounterInterval/>
      </div>
    </>
  );
}

export default App;
