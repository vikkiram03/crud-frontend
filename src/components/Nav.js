import {Link} from "react-router-dom";

function Nav() {
    return ( 
        <nav className="navbar bg-warning">
            <Link className="m-2 navbar-brand mx-5" to = "/"> CRUD Operations </Link>
            <div className="nav">
                <Link className="nav-link" to="/create-student">Create Student</Link>
                <Link className="nav-link" to="/student-list">Student List</Link>
            </div>
        </nav>
    )
}

export default Nav;