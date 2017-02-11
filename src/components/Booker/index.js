import React from 'react'
import './index.css'

const Booker = (props) => {
	return (
		<div className="bookings">
			<h2 className="bookings__h2">
				BOOKINGS
			</h2>
			<div className="booker">
			<div className="booker--name bebas-bold">
				RYAN OTIS &nbsp;
				<span className="booker--locale">
					(CA) &nbsp;
				</span>
				<span className="booker--offering bebas-regular">
					AGENT
				</span>
			</div>
				<div className="booker-social">
					<a href="">INSTA</a>
					<a href="">SOUNDCLOUD</a>
				</div>
			</div>
		</div>
	)
}

export default Booker
