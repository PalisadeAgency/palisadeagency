import React from 'react'
import './index.css'

const Booker = (props) => {
	return (
		<div className="bookings">
			<h2 className="bookings__h2" id="bookings">
				BOOKINGS
			</h2>
			<div className="booker">
			<div className="booker--name bebas-bold">
				RYAN OTIS	(CA)
				<span className="booker--offering bebas-regular">
					AGENT
				</span>
				<div className="booker--email bebas-regular">
					<a href="mailto:R@palisadeagency.com">R@PALISADEAGENCY.COM</a>
				</div>
			</div>
				<div className="vert-bar">	</div>
				<div className="booker-social">
					<a href="">INSTA</a>
					<a href="">SOUNDCLOUD</a>
				</div>
			</div>
		</div>
	)
}

export default Booker
