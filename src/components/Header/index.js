import './index.css'
import {FaMoon} from 'react-icons/fa'
import {IoMdMenu} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'

const Header = () => {
  console.log('dinesh')
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt=""
        className="nxtWatch-logo"
      />
      <ul className="icon-contianer">
        <li>
          <FaMoon className="moon-icon" />
        </li>
        <li>
          <IoMdMenu className="menu-icon" />
        </li>
        <li>
          <FiLogOut className="logout-icon" />
        </li>
      </ul>
    </div>
  )
}

export default Header
