import '../css/Dropdown.css'
import {LogoutButton} from './LogoutButton.jsx'
import {BiLogOut} from "react-icons/bi"

export const Dropdown = () => {
    return (
        <div className="dropdown-container">
            <BiLogOut />
            <LogoutButton/>
        </div>
    )
}

