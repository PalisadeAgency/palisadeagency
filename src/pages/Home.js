import React from 'react'
import Navigation from '../components/Navigation'
import ImageSlider from '../components/ImageSlider'
import FeaturedArtists from '../components/FeaturedArtists'
import Roster from '../components/Roster'
import About from '../components/About'
import Booker from '../components/Booker'

import images from '../db/slideImages'
import artists from '../db/artists'

const Home = (props) => {
	return (
		<div className='App'>
			<div className="width-constraint">
				<Navigation />
				<ImageSlider images={images} />
				<FeaturedArtists artists={artists} />
				<Roster artists={artists}/>
				<Booker />
				<About />
			</div>
		</div>
	)
}

export default Home
