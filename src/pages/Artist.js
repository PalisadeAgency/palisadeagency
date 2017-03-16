import React from 'react'
import artists from '../db/artists'
import ArtistInfo from '../components/ArtistInfo'
import Roster from '../components/Roster'
import Booker from '../components/Booker'
import About from '../components/About'

const Artist = (props) => {
	const {routeParams} = props
	const [artist] = artists.filter((artist) => artist.name === routeParams.artist)
	return (
		<div className='App'>
			<div className="width-constraint">
				<ArtistInfo artist={artist}/>
				<Roster artists={artists}/>
				<Booker />
				<About />
			</div>
		</div>
	)
}

export default Artist
