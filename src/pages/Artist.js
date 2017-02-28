import React from 'react'
import artists from '../db/artists'
import ImageSlider from '../components/ImageSlider'
import ArtistInfo from '../components/ArtistInfo'

const Artist = (props) => {
	const {routeParams} = props
	const [artist] = artists.filter((artist) => artist.name === routeParams.artist)
	return (
		<div className='App'>
			<div className="width-constraint">
				<ImageSlider images={artist.images} />
				<ArtistInfo artist={artist}/>
			</div>
		</div>
	)
}

export default Artist
