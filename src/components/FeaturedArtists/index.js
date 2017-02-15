import React from 'react'
import './index.css'

const FeaturedArtists = (props) => {
	const artists = props.artists.filter((artist) => {
		return artist.featured
	})
	return (
		<div className='artists'>
			{
				artists.map((artist) => {
					return (
						<div className='artist'>
							<div className="artist--name bebas-bold">
								{artist.name} &nbsp;
								<span className="artist--locale">
									({artist.locale}) &nbsp;
								</span>
								<span className="artist--offering bebas-regular">
									{artist.offering}
								</span>
							</div>
							<div className="artist--description klinic-book">
								{artist.description}
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default FeaturedArtists
