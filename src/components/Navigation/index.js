import React from 'react'
import './index.css'

const Navigation = (props) => {
	return (
		<nav className='navigation'>
			<div className='navigation__brand'>
				<h1 className='navigation__brand-name__h1'>PALISADE AGENCY</h1>
			</div>
			<div className='navigation__right-nav'>
				<ul className="navigation__right-nav__ul">
					<li className="navigation__right-nav__li">
						<a href="#roster">
							roster
						</a>
					</li>
					<li className="navigation__right-nav__li">
						<a href="#bookings">
							bookings
						</a>
					</li>
					<li className="navigation__right-nav__li">
						<a href="#about">
							about
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navigation
