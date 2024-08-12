import React from "react";
import Info from "./Info";
import About from "./About"
import Interests from "./Interests";
import Footer from "./Footer";


export default function App(){
  return(
    <div className="app_bg">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}