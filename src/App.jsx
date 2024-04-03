/* eslint-disable no-unused-vars */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { About,Footer,Header,Skills,Testimonials,Work } from "./container";
import { Navbar } from "./components";
import './App.scss';
const App = ()=>{
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About/>
            <Work/>
            <Skills/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}

export default App;