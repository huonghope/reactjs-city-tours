import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.scss'
import logo from '../../logo.png'
function Navbar(props) {
    return (
        <nav className="navbar">
        <img src = {logo} alt = 'city tours logo' />
					<ul className ="nav-links">
					<li>
						<a href = "/" className = "nav-link">
							home
						</a>
					</li>
					<li>
						<a href = "/" className = "nav-link">
							about
						</a>
					</li>
					<li>
						<a href = "/" className = "nav-link active">
							tours
						</a>
					</li>
					</ul>
        </nav>
    )
}

Navbar.propTypes = {

}

export default Navbar

