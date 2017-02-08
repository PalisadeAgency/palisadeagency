import React from 'react'
import Navigation from '../components/Navigation'
import ImageSlider from '../components/ImageSlider'
import FeaturedArtists from '../components/FeaturedArtists'
import Roster from '../components/Roster'

import images from '../db/slideImages'
import artists from '../db/artists'

const Home = (props) => {
	return (
		<div className='App'>
			<Navigation />
			<ImageSlider images={images} />
			<FeaturedArtists artists={artists} />
			<Roster artists={artists}/>
			<div className="bookings">
				<h2 className="bookings__h2">
					BOOKINGS
				</h2>
				<div className="booker">
				<div className="booker--name bebas-bold">
					RYAN OTIS &nbsp;
					<span className="booker--locale">
						(CA) &nbsp;
					</span>
					<span className="booker--offering bebas-regular">
						AGENT
					</span>
				</div>
					<div className="booker-social">

					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
