import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function NavSubGroup2()
{
    return (
        <ul className="nav flex-column x-nav-group">
            <li className="nav-item item-nav-sub">
                <Link to="/group-2"
                    className="nav-link d-flex align-items-center justify-content-between">
                    <span>Group 2</span>
                    <button type="button" className="btn btn-primary d-flex align-items-center justify-content-center"
                        data-bs-toggle="collapse" 
                        data-bs-target="#nm-g2-collapse" 
                        aria-expanded="false" aria-controls="nm-g2-collapse">
                            <FontAwesomeIcon icon={ solid('angle-down') } />
                        </button>
                </Link>
            </li>
            <ul className="nav flex-column collapse" id="nm-g2-collapse">
                <li className="nav-item">
                    <a className="nav-link" href="#">Shell 00</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Shell 01</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 00</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 01</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 02</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 03</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 04</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 05</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 06</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 07</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 08</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 09</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 10</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 11</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 12</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">C 13</a>
                </li>
            </ul> 
        </ul> 
    )
}