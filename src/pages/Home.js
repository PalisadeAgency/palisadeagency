import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Roster from '../components/Roster'
import About from '../components/About'
import Booker from '../components/Booker'

import images from '../db/slideImages'
import artists from '../db/artists'

const Home = (props) => {
	return (
		<div className='App'>
			<div className="width-constraint">
				<ImageSlider images={images} />
				<Roster artists={artists}/>
				<Booker />
				<About />
				<div className="copyright" style={{
						textAlign: 'center',
						marginBottom: '33px'
					}}>
					&copy; 2017
					<script>new Date().getFullYear()>2017&&document.write("-"+new Date().getFullYear());</script>, Palisade Agency.
				</div>
			</div>
		</div>
	)
}

export default Home
