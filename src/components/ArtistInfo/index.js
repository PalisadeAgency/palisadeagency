import React, {PropTypes} from 'react'
import insta from '../../../public/img/icons/instagram.png'
import soundcloud from '../../../public/img/icons/soundcloud.png'

const ArtistInfo = (props) => {
	const {artist} = props
	return (
		<div className="artist--content">
			<div className="artist--info">
				<div className="artist--headline">
					<div className="artist--name bebas-bold">
						{artist.name}
						&nbsp;
						<span className="artist--locale">
							({artist.locale}) &nbsp;
						</span>
						<span className="artist--offering bebas-regular">
							{artist.offering}
						</span>
					</div>
				</div>
				<div className="artist--bio">
					Soundcloud hit after Soundcloud hit, Baltra strolled through 2016 with grace, style and perseverance all while managing to pick up a whole slew of fans along the way. The New Yorker's hit single “Fade Away” has currently amassed over 900,000 plays on Youtube and was named the 94th track of 2016 by Mixmag.
				</div>
			</div>
			<div className="artist--press">
				<div className="artist--press__h1">
					PRESS
				</div>
				<li className="artist--press__li">
					Mixmag
				</li>
				<li className="artist--press__li">
					Inverted Audio
				</li>
				<li className="artist--press__li">
					Resident Advisor
				</li>
			</div>

			<div className="artist--social">
				<a href="" className="social-icon"><img src={soundcloud} alt="soundcloud icon"/></a>
				<a href="" className="social-icon"><img src={insta} alt="instagram icon"/></a>
			</div>
		</div>
	)
}

export default ArtistInfo
