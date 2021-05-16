import { Link } from 'react-router-dom'
import RoutingPath from "../../routes/RoutingPath"

const NavDesktop = () => {
    return (
        <div>
            <Link to={RoutingPath.home}>Home</Link>
            <Link to={RoutingPath.about}>About</Link>
        </div>
    )
}

export default NavDesktop
