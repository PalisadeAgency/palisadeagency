import React from 'react'
import insta from '../../../public/img/icons/instagram.png'
import soundcloud from '../../../public/img/icons/soundcloud.png'
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
					<a href="" className="social-icon"><img src={soundcloud} alt="soundcloud icon"/></a>
					<a href="" className="social-icon"><img src={insta} alt="instagram icon"/></a>
				</div>
			</div>
		</div>
	)
}

export default Booker
