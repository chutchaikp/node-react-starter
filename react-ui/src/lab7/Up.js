import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

import './Up.css'

const Up = () => {
	return (
		<div className="container">

			<div className="profile-card">

				<div className="profile">Name ...</div>
				<div className="pic">xxx</div>
				<div className="above-fold">

					<div className="expand-button">
						<FontAwesomeIcon size="6x" color="#333" icon={faArrowCircleDown} />
					</div>
				</div>
				<div className="below-fodd">x</div>

			</div>

		</div>
	)
}

export default Up
