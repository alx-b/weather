import { Link } from 'react-router-dom'
import RoutingPath from "../../routes/RoutingPath"
import "./nav_desktop.css"

const NavDesktop = () => {
    return (
        <nav>
            <Link to={RoutingPath.home}>Today</Link>
            <Link to={RoutingPath.about}>About</Link>
        </nav>
    )
}

export default NavDesktop
