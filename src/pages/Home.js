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
				<div className="height--100">
					<Navigation />
					<ImageSlider images={images} />
					<FeaturedArtists artists={artists} />
				</div>
				<Roster artists={artists}/>
				<Booker />
				<About />
				<div className="copyright" style={{
						textAlign: 'center'
					}}>
					&copy; 2017
					<script>new Date().getFullYear()>2017&&document.write("-"+new Date().getFullYear());</script>, Palisade Agency.
				</div>
			</div>
		</div>
	)
}

export default Home
