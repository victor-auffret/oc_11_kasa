import { NavLink } from "react-router-dom"
import "./index.css"

const NavMenu = () => {
 return <nav className="nav-menu">
  <NavLink className="title" to={`/`}></NavLink>
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
