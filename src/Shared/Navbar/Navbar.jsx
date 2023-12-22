import { Link } from "react-router-dom";
import useAuth from "../../Components/Hook/useAuth";


const Navbar = () => {

    const { user, logOut } = useAuth()

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log("Logged out", res);
            })
            .catch(err => {
                console.log("Error logging out", err);
            });
    }

    const navLinks = <>
        <li><Link>Home</Link></li>
        {user ? <button onClick={handleLogout} className="btn btn-sm hover:bg-[#FF3811] bg-[#FF3811] text-white">Log Out</button> : <li><Link to="/login">Login</Link></li>}
        <li><Link to="/signup">Register</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">TaskManagement</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn" to="/dashboard">Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;