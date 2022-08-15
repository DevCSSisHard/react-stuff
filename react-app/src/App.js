import './index.css';
//import HelloWorld from './Components/HelloWorld'
//import CounterHook from "./Components/CounterHook"
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

function App() {
  return (
    <div>
      <Header />

      <Router>
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
      </Router>

      {/* <HelloWorld name="wowe man" /> */}
      <Footer />
    </div>
  );
}

export default App;
