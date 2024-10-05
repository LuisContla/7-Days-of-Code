import { Link } from "react-router-dom";

const NavLink = (props) => {

    const { ref, txt } = props; 

    return (
        <>
            <a className="a" href={ref}>{txt}</a>
        </>
    )
}

export default NavLink