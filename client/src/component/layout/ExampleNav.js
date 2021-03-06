import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const ExampleNav = () => {
    return (
        <nav>
            <ul className="nav flex-column">

                <li className="nav-item">
                    <Link to="/example/dashboard"
                        className="nav-link">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/example/dropdownlist-insert"
                        className="nav-link">
                        dropdownlist-insert
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default ExampleNav
