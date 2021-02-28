import React from 'react'
import './Ball.css'

const Ball = () => {
	return (
		<div>
			Ball
			<div className="frame">
				<div className="background"></div>
				<div className="floor"></div>
				<div className="ball-x">
					<div className="ball-up">
						<div className="ball-down">
							<div className="ball"></div>
						</div>
					</div>
					<div className="shadow"></div>
				</div>
			</div>
		</div>
	)
}

export default Ball
