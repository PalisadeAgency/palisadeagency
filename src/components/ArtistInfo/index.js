import React from 'react'
import './index.css'
import insta from '../../../public/img/icons/instagram.png'
import soundcloud from '../../../public/img/icons/soundcloud.png'
import facebook from '../../../public/img/icons/facebook.png'
import twitter from '../../../public/img/icons/twitter.png'
import ImageSlider from '../ImageSlider'

const ArtistInfo = (props) => {
	const {artist} = props
	return (
		<div className="artist-content">
			<div className="artist-image">
				<ImageSlider images={artist.images}/>
			</div>
			<div className="artist-info">
				<div className="artist-headline">
					<div className="artist-name bebas-bold">
						{artist.name} {artist.locale}
					</div>
				</div>
				<div className="artist-bio bebas-regular">
					{artist.bioOne}
				</div>
				<div className="artist-bio bebas-regular">
					{artist.bioTwo}
				</div>
				<div className='artist-region bebas-bold'>
					REGION: {artist.region}
				</div>
				<div className="artist-agent bebas-bold">
					AGENT: {artist.agent}
				</div>

				<div className="artist-social">
					{artist.social.instagram ?
						<a href={artist.social.instagram} className="social-icon">
							<img src={insta} alt="instagram icon"/>
						</a>: null}

					{artist.social.facebook ?
						<a href={artist.social.facebook} className="social-icon">
							<img src={facebook} alt="instagram icon"/>
						</a>: null}

					{artist.social.twitter ?
						<a href={artist.social.twitter} className="social-icon">
							<img src={twitter} alt="instagram icon"/>
						</a>: null}
					{artist.social.soundcloud ?
						<a href={artist.social.soundcloud} className="social-icon social-icon-soundcloud">
							<img src={soundcloud} alt="soundcloud icon"/>
						</a>: null}
				</div>


			</div>
		</div>
	)
}

export default ArtistInfo
