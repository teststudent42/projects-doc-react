import React from 'react'
import { Link } from 'react-router-dom'

import NavSubGroup1 from './NavSubGroup1/NavSubGroup1'
import NavSubGroup2 from './NavSubGroup2/NavSubGroup2'

import './sass/main.sass'
import logoImg from 'logo.svg'
import NavSubGroup3 from './NavSubGroup3/NavSubGroup3'

export default function NavMain()
{
    return (
        <nav id='nav-main'>
            <ul className="nav flex-column">
                <li className='item-app nav-item'>
                    <Link to="/" replace
                        className="nav-link d-flex align-items-center" aria-current="page">
                        <img src={ logoImg } />
                        <span className='d-flex'>Projects Doc</span>
                    </Link>
                </li>
            </ul> 
            <NavSubGroup1 />
            <NavSubGroup2 />
            <NavSubGroup3 />
        </nav>
    )

}