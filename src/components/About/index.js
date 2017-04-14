import React from 'react'
import facebook from '../../../public/img/icons/facebook.png'
import instagram from '../../../public/img/icons/instagram.png'
import twitter from '../../../public/img/icons/twitter.png'
import soundcloud from '../../../public/img/icons/soundcloud.png'

import './index.css'

const About = (props) => {
	return (
		<div className="about">
			<h2 className="about__h2 tilted" id="about">
				ABOUT
			</h2>
			<div className="about-blocks">
				<div className="block-left">
					<div className="about--info bebas-regular">
						<div className="about__p">
							An international booking agency located in the heart of Canada’s Cultural Mecca; Montreal.
						</div>
						<div className="about__p">
							We are proud to represent the artists of tomorrow so that you can enjoy the best in music today.
						</div>
					</div>
				</div>
				<div className="vert-bar"></div>
				<div className="block-right">
					<div className="about--contact--social">
						<span className="about--contact--social__span">
							<a href="https://www.instagram.com/palisadeagency/
" className="social-icon">
								<img src={instagram} alt="instagram icon"/>
							</a>
						</span>
						<span className="about--contact--social__span">
							<a href="https://www.facebook.com/palisadeagency/
" className="social-icon">
								<img src={facebook} alt="facebook icon"/>
							</a>
						</span>
						<span className="about--contact--social__span">
							<a href="https://soundcloud.com/palisadeagency" className="social-icon about-social-icon-twitter">
								<img src={soundcloud} alt="twitter icon"/>
							</a>
						</span>
					</div>
				</div>
			</div>
			<div className="copyright" style={{
					textAlign: 'center',
					marginBottom: '33px',
					marginTop: '33px',
					fontSize: '16px'
				}}>
				&copy; 2017
				<script>new Date().getFullYear()>2017&&document.write("-"+new Date().getFullYear());</script>, Palisade Agency.
			</div>
		</div>
	)
}

export default About
