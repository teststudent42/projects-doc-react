import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function NavSubGroup3()
{
    return (
        <ul className="nav flex-column x-nav-group">
            <li className="nav-item item-nav-sub">
                <Link to="/group-3"
                    className="nav-link d-flex align-items-center justify-content-between">
                    <span>Group 3</span>
                    <button type="button" class="btn btn-primary d-flex align-items-center justify-content-center"
                        data-bs-toggle="collapse" 
                        data-bs-target="#nm-g3-collapse" 
                        aria-expanded="false" aria-controls="nm-g3-collapse">
                            <FontAwesomeIcon icon={ solid('angle-down') } />
                        </button>
                </Link>
            </li>
            <ul className="nav flex-column collapse" id="nm-g3-collapse">
                <li className="nav-item">
                    <a className="nav-link" href="#">libft</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">ft_printf</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">grt_nrxtyt_line</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">born2reboot</a>
                </li>
            </ul> 
        </ul> 
    )
}