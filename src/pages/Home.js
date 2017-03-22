import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Roster from '../components/Roster'
import About from '../components/About'
import Booker from '../components/Booker'
import logo from '../../public/img/logo.png'

import images from '../db/slideImages'
import artists from '../db/artists'

const Home = (props) => {
	return (
		<div className='App Home'>
			<div className="width-constraint">
				<div className='logo'>
					<img src={logo} className="logo" alt="Logo"/>
				</div>
				<ImageSlider images={images} />
				<Roster artists={artists}/>
				<Booker />
				<About />
			</div>
		</div>
	)
}

export default Home
