import React from 'react'
import insta from '../../../public/img/icons/instagram.png'
import soundcloud from '../../../public/img/icons/soundcloud.png'
import './index.css'

const Booker = (props) => {
	return (
		<div className="bookings">
			<h2 className="bookings__h2 tilted" id="bookings">
				BOOKINGS
			</h2>
			<div className="booker">
				<div className="bookers-left">
					<div className="booker--name bebas-bold">
						<div className="booker--large">
							RYAN OTIS (CA)
						</div>
						<span className="booker--offering bebas-regular">
							AGENT
						</span>
					</div>
					<div className="booker--email bebas-regular">
						<a href="mailto:R@palisadeagency.com">R@PALISADEAGENCY.COM</a>
					</div>
					<div className="booker--name bebas-bold">
						<div className="booker--large">
							RYAN OTIS (CA)
						</div>
						<span className="booker--offering bebas-regular">
							AGENT
						</span>
					</div>
					<div className="booker--email bebas-regular">
						<a href="mailto:R@palisadeagency.com">R@PALISADEAGENCY.COM</a>
					</div>
				</div>
				<div className="vert-bar"></div>
				<div className="bookers-right">
					<div className="booker--name bebas-bold">
						<div className="booker--large">
							RYAN OTIS (CA)
						</div>
						<span className="booker--offering bebas-regular">
							AGENT
						</span>
					</div>
					<div className="booker--email bebas-regular">
						<a href="mailto:R@palisadeagency.com">R@PALISADEAGENCY.COM</a>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Booker
