import React from 'react'
import './RotatingLoader.css'

const RotatingLoader = () => {
	return (
		<div>
			Rotating loader ...

			<div className="loader">
				<div className="face">
					<div className="circle"></div>
				</div>
				<div className="face">
					<div className="circle"></div>
				</div>
			</div>
		</div>
	)
}

export default RotatingLoader
