import {NavLink} from "react-router-dom"
import "../Styles/NavBar.css"

const NavBar = () => {
    return (
        <header>
            <NavLink to={"/"}><img src="data:image/png;base64,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" alt="pokeball-logo"/></NavLink>
            <NavLink to={"/pokemon"}>Pokemon</NavLink>
            <NavLink to={"/locations"}>Locations</NavLink>
            <NavLink to={"/berries"}>Berries</NavLink>
        </header>
    )
}

export default NavBar