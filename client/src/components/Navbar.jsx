import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <Link to="/" style={{textDecoration: "none"}}>
          <div className="nav-elems">QXChange</div>

      </Link>

      <div className="nav-button-wrapper">
        {/* {user ? (
          <div className="account-container" onClick={handleOpen}>
            <div className="acc-text-wrapper">
              <div className="nav-elems">{user.name}</div>
              <AiFillCaretDown style={{ color: "white" }} />
              {open ? <Dropdown /> : null}
            </div>
          </div>
        ) : (
          <AuthButton />
        )} */}

        {/* {user ? null : <SignupButton />} */}
      </div>
    </div>
  );
};
