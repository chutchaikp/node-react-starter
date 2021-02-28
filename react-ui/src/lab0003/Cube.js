import React from 'react'
import './Cube.css'

const Cube = () => {
	return (

		<div className="frame">
			<div className="center">
				<div className="cube">
					<div className="wall left">
						<div className="fill"></div>
					</div>
					<div className="wall right"></div>
					<div className="wall front">
						<div className="fill"></div>
					</div>
					<div className="wall back"></div>
					<div className="top"></div>
					<div className="bottom"></div>
				</div>
			</div>
		</div>

	)
}

export default Cube
