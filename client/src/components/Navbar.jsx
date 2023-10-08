import { useAuth0 } from "@auth0/auth0-react";
import "../css/Navbar.css";
import { AuthButton } from "./AuthButton";
import { LogoutButton } from "./LogoutButton.jsx";
import { SignupButton } from "./SignupButton.jsx"
import {Link} from "react-router-dom"
import {AiFillCaretDown} from 'react-icons/ai'
import {useState} from 'react'
import {Dropdown} from './Dropdown.jsx'

export const Navbar = () => {
  const { user } = useAuth0();
  const [open,setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="navbar">
      <Link to="/" style={{textDecoration: "none"}}>
          <div className="nav-elems">QXChange</div>
      </Link>

      <div className="nav-button-wrapper">
        {user ? 
        <div className="account-container" onClick={handleOpen}>
          <div className="acc-text-wrapper">
            <div className="nav-elems">{user.name}</div>
            <AiFillCaretDown style={{color:"white"}}/>
            {open ? <Dropdown /> : null}
          </div>
        </div> 


        : <AuthButton/>}

        {user ? null : <SignupButton/>}
      </div>
    </div>
  );
};
