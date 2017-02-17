import React from 'react'
import facebook from '../../../public/img/icons/facebook.png'
import instagram from '../../../public/img/icons/instagram.png'
import twitter from '../../../public/img/icons/twitter.png'

import './index.css'

const About = (props) => {
	return (
		<div className="about">
			<h2 className="about__h2" id="about">
				ABOUT
			</h2>
			<div className="about__info">
				<div className="about--info bebas-regular">
					<div className="about__p">
						An international booking agency located in the heart of Canada’s Cultural Mecca; Montreal.
					</div>
					<div className="about__p">
						We are proud to represent the artists of tomorrow so that you can enjoy the best in music today.
					</div>
				</div>
				<div className="vert-bar">	</div>
				<div className="about--contact">
					<div className="about--contact--name">
						<h2 className="about--contact--name__h2 bebas-bold">
							PALISADE ONLINE
						</h2>
					</div>
					<div className="about--contact--social">
						<span className="about--contact--social__span">
							<a href="" className="social-icon"><img src={facebook} alt="facebook icon"/></a>
						</span>
						<span className="about--contact--social__span">
							<a href="" className="social-icon"><img src={instagram} alt="instagram icon"/></a>
						</span>
						<span className="about--contact--social__span">
							<a href="" className="social-icon"><img src={twitter} alt="twitter icon"/></a>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
