import React from 'react'
import {Link} from "react-router-dom";

function NavigationMenu(props){
  return(
    <div>
      <ul>
        <li>
          <nav>
            <Link to="/" className="text-blue-500 py-3 border-t border-b block"  onClick={props.closeMenu}>Home</Link>
          </nav>
        </li>

        <li>
          <nav>
            <Link to="/Login" className="text-blue-500 py-3 border-b block" onClick={props.closeMenu}>Login & Sign-up</Link>
          </nav>
        </li>



        <li>
          <nav>
            <Link to="/About" className="text-blue-500 py-3 border-b block" onClick={props.closeMenu}>About-Us</Link>
          </nav>
        </li>

        <li>
          <nav>
            <Link to="/Audiogame" className="text-blue-500 py-3 border-b block" onClick={props.closeMenu}>Audio-Game</Link>
          </nav>
        </li>

        <li>
          <nav>
            <Link to="/CounterHook" className="text-blue-500 py-3 border-b block" onClick={props.closeMenu}>Counter-Hook</Link>
          </nav>
        </li>

        <li>
          <nav>
            <Link to="/John-Chilling" className="text-blue-500 py-3 border-b block" onClick={props.closeMenu}>John-Cena</Link>
          </nav>
        </li>


      </ul>
    </div>
  )
}

export default NavigationMenu
