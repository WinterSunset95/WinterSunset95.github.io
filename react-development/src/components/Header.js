import React from 'react'
import Logo from '../images/Logo.jpg'

export default function Header() {
    return (
        <nav className="row nav border align-items-center">
            <div className='align-items-center col-6'>
                <img src={Logo} width="50px" alt="Winter's display pic" className="rounded-circle" />
                <h2 className="font-size-md">WinterSunset95</h2>
            </div>
            <ul className="col-6 nav d align-items-center justify-content-end nav-pills">
                <li className="nav-item "><a href="" className="nav-link active">Home</a></li>
                <li className="nav-item "><a href="" className="nav-link">Projects</a></li>
                <li className="nav-item "><a href="" className="nav-link">Games</a></li>
            </ul>
        </nav>
    )
}
