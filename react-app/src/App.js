import './index.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import JohnChilling from "./Components/JohnChilling";
import CounterHook from "./Components/CounterHook";
import Home from "./Views/Home";
import About from "./Views/About";
import Login from "./Components/Login"
import Register from "./Components/Register"
import React from "react";
import Reset from "./Components/Reset";
import Dashboard from "./Components/Dashboard";
import Audiogame from "./Views/Audiogame";


function App() {

  return (
    <div className = "min-h-screen bg-neon-city">

      <Header />

      <Routes>
        <Route path="/John-Chilling" element={<JohnChilling />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CounterHook" element={<CounterHook />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Audiogame" element={<Audiogame />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />


    </div>

  );
}

{/* <HelloWorld name="wowe man" /> */}
export default App;

{/*
        <ul>
          <li>
            <Link to="/" className={"text-blue-500"}>Home</Link>
          </li>
          <li>
            <Link to="/" className={"text-blue-500"}>Counting with hooks</Link>
          </li>
          <li>
            <Link to="/" className={"text-blue-500"}>About</Link>
          </li>
        </ul>

        <Routes>
          <Route path='/' element={<Header/>}>

          </Route>
          <Route path='/about' element={<HelloWorld/>}>

          </Route>
          <Route path='/hooks' element={<CounterHook/>}>

          </Route>
        </Routes>
        */}
