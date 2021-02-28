import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './ButtonExpand.css';

const ButtonExpand = () => {
	return (
		<div className="container">
			<div className="button-expand">
				<FontAwesomeIcon size="5x" color="#333" icon={faArrowCircleRight} />
			</div>
		</div>
	)
}

export default ButtonExpand
