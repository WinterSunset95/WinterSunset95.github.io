import React from 'react'
import Logo from '../images/Logo.jpg'

export default function Header() {
    return (
        <nav className="row nav border align-items-center">
            <div className='row align-items-center col-6 header_userInfo'>
                <img src={Logo} alt="Winter's display pic" className="img-thumbnail float-start rounded" />
                <h2 className="header_name">WinterSunset95</h2>
            </div>
            <ul className="col-6 nav justify-content-end nav-pills">
                <li className="nav-item"><a href="" className="nav-link active">Home</a></li>
                <li className="nav-item"><a href="" className="nav-link">Projects</a></li>
                <li className="nav-item"><a href="" className="nav-link">Games</a></li>
            </ul>
        </nav>
    )
}
