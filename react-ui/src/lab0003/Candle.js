import React from 'react'
import './Candle.css'

const Candle = () => {
	return (
		<div>
			<div className="frame">
				<div className="center">
					<div className="flame">
						<div className="inner-flame">
						</div>
					</div>
					<div className="fuse"></div>
					<div className="candle">
						<div className="shadow">
						</div>
					</div>
					<div className="tray"></div>
				</div>
			</div>
		</div>
	)
}

export default Candle
