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
					<a href="mailto:R@palisadeagency.com">
							<div className="booker--name bebas-bold">
								<div className="booker--large">
									RYAN OTIS (CA)
								</div>
								<span className="booker--offering bebas-regular">
									HEAD AGENT
								</span>
							</div>
							<div className="booker--email bebas-regular">
							R@PALISADEAGENCY.COM
							</div>
					</a>

				<a href="mailto:R@palisadeagency.com">
					<div className="booker--name bebas-bold">
						<div className="booker--large">
							ADAM RUTLEDGE (CA)
						</div>
						<span className="booker--offering bebas-regular">
							AGENT
						</span>
					</div>
					<div className="booker--email bebas-regular">
						A@PALISADEAGENCY.COM
					</div>
				</a>


				</div>
				<div className="vert-bar"></div>
				<div className="bookers-right">
					<a href="mailto:M@palisadeagency.com">
						<div className="booker--name bebas-bold">
							<div className="booker--large">
								MAT CONSTANCE (CA)
							</div>
							<span className="booker--offering bebas-regular">
								AGENT
							</span>
						</div>
						<div className="booker--email bebas-regular">
							M@PALISADEAGENCY.COM
						</div>
					</a>
				</div>

			</div>
		</div>
	)
}

export default Booker
