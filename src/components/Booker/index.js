import React from 'react'
import insta from '../../../public/img/icons/instagram.png'
import soundcloud from '../../../public/img/icons/soundcloud.png'
import './index.css'

const Booker = (props) => {
	return (
		<div className="bookings">
			<h2 className="bookings__h2 tilted tilted-hacky-fix" id="bookings">
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

					<a href="mailto:e@palisadeagency.com">
						<div className="booker--name bebas-bold">
							<div className="booker--large">
								EMMANUEL COTE (CA)
							</div>
							<span className="booker--offering bebas-regular">
								MEDIA MANAGER
							</span>
						</div>
						<div className="booker--email bebas-regular">
							E@PALISADEAGENCY.COM
						</div>
					</a>

				</div>

				<div className="vert-bar"></div>

				<div className="bookers-right">
					<a href="mailto:m@palisadeagency.com">
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
