import './index.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HelloWorld from "./Components/HelloWorld";
import CounterHook from "./Components/CounterHook";
import Home from "./Views/Home";
import About from "./Views/About";
import React from "react";

function App() {

  return (
    <div>

      <Header />

      <Routes>
        <Route path="/HelloWorld" element={<HelloWorld />} />
        <Route path="/CounterHook" element={<CounterHook />} />
        <Route path="/About" element={<About />} />
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
