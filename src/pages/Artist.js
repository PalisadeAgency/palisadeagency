import React from 'react'
import artists from '../db/artists'
import ImageSlider from '../components/ImageSlider'

const Artist = (props) => {
	const {routeParams} = props
	const [artist] = artists.filter((artist) => artist.name === routeParams.artist)
	return (
		<div className='App'>
			<div className="width-constraint">
				<ImageSlider images={artist.images} />
			</div>
		</div>
	)
}

export default Artist
