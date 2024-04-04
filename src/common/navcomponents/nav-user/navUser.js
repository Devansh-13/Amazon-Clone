import { Link } from "react-router-dom";

const NavUser=()=>{
    return (
        <div className="nav-user border">
                <div className="user-info">
                    <Link to={"/signup"}>
                    <span className="user-line1">Hello, sign in</span>
                    </Link>
                    <span className="user-line2">Account & lists</span>
                </div>
                <div className="arrow-icon-2"></div>
        </div>
    )
}

export default NavUser;