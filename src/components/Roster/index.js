import React from 'react'
import {Link} from 'react-router'
import './index.css'

const Roster = (props) => {
	const {artists} = props
	return (
		<div className="rostering" id="roster">
			<h2 className="rostering__h2">
				ROSTER
			</h2>
			<div className='roster'>
				{artists.map((artist) => {
					return (
						<Link to={artist.name} className="roster--artist">
							<div className="roster--artist--name">
								{artist.name}
							</div>
							<div className="roster--arist--locale">
								{artist.locale}
							</div>
						</Link>
					)
				})
}
			</div>
		</div>

	)
}

export default Roster
