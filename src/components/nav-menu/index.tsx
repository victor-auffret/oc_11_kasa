import { NavLink } from "react-router-dom"
import "./index.css"
import kasaLogo from "./kasa.svg"

const NavMenu = () => {
 return <nav className="nav-menu">
  <div className="title">

  </div>
  <ul className={"nav-list"}>
   <li className={"nav-link"}>
    <NavLink to={`/`}>Accueil</NavLink>
   </li>
   <li className={"nav-link"} >
    <NavLink to={`/about`}>A Propos</NavLink>
   </li>
  </ul>
 </nav>
}

export { NavMenu }
