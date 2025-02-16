import React from 'react'
import './Header.css'
import netflix from "../../assets/images/netflix.jpg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div>
      <div className='header_outer_container'>
        <div className='header_container'>
          <div className='header_left'>
            <ul>
              <li><img src={netflix} alt="Netflix Logo" width="100" /></li>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>

          </div>
          <div className='header_right'>
            <ul>
              <li><SearchIcon/></li>
              <li><NotificationsActiveOutlinedIcon/></li>
              <li><AccountBoxIcon/></li>
              <li><ArrowDropDownIcon/></li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

