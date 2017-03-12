import React from 'react'
import {Link} from 'react-router'
import {groupBy} from 'lodash'
import './index.css'

const Roster = (props) => {
	const {artists} = props
	const groupedArtists = groupBy(artists, 'col')
	console.log('test', groupedArtists['1'])

	return (
		<div className="rostering" id="roster">
			<h2 className="rostering__h2">
				ROSTER
			</h2>
			<div className='roster'>
				{groupedArtists["1"].map((artist) => {
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
			<div className='roster'>
				{groupedArtists["2"].map((artist) => {
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
			<div className='roster'>
				{groupedArtists["3"].map((artist) => {
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
			<div className='roster'>
				{groupedArtists["4"].map((artist) => {
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
