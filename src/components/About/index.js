import React from 'react'
import './index.css'

const About = (props) => {
	return (
		<div className="about">
			<h2 className="about__h2">
				ABOUT
			</h2>
			<div className="about__info">
			<div className="about--info bebas-bold">
				<div className="about__p">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias accusamus, voluptas delectus assumenda asperiores, earum expedita quo doloremque voluptates veniam, est incidunt id, labore ab rerum. Possimus aut, vero.
				</div>
				<div className="about__p">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias accusamus, voluptas delectus assumenda asperiores, earum expedita quo doloremque voluptates veniam, est incidunt id, labore ab rerum. Possimus aut, vero.
				</div>
			</div>
			<div className="about--contact">
				<div className="about--contact--name">
					<h2 className="about--contact--name__h2">
						PALISADE ONLINE
					</h2>
				</div>
				<div className="about--contact--social">
					<span className="about--contact--social__span">
						FACEBOOK
					</span>
					<span className="about--contact--social__span">
						INSTAGRAM
					</span>
					<span className="about--contact--social__span">
						TWATTER
					</span>
				</div>
			</div>
			</div>
		</div>
	)
}

export default About
