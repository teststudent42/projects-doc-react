import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function NavSubGroup1()
{
    return (
        <ul className="nav flex-column x-nav-group">
            <li className="nav-item item-nav-sub">
                <Link to="/group-1"
                    className="nav-link d-flex align-items-center justify-content-between">
                    <span>Group 1</span>
                    <button type="button" class="btn btn-primary d-flex align-items-center justify-content-center"
                        data-bs-toggle="collapse" 
                        data-bs-target="#nm-g1-collapse" 
                        aria-expanded="false" aria-controls="nm-g1-collapse">
                            <FontAwesomeIcon icon={ solid('angle-down') } />
                        </button>
                </Link>
            </li>
            <ul className="nav flex-column collapse" id="nm-g1-collapse">
                <li className="nav-item">
                    <a className="nav-link" href="#">block-runner</a>
                </li>
            </ul> 
        </ul> 
    )
}