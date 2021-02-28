import React from 'react'
import './PopupOverlay.css'

const PopupOverlay = () => {
	return (
		<div>
			PopupOverlay

			<div className="stripe"></div>
			<div className="center">
				<div className="card">
					<div className="dismiss"></div>
					<div className="illustration">
						<div className="car">
							<div className="body">
								<div className="body-front"></div>
								<div className="body-back"></div>
								<div className="window"></div>
							</div>
							<div className="front wheel"></div>
							<div className="back wheel"></div>
						</div>
						<div className="layer-0"></div>
						<div className="layer-1">
							<div className="chunk-1">
								<div className="tree"></div>
								<div className="tree"></div>
								<div className="bush"></div>
								<div className="tree"></div>
								<div className="tree"></div>
								<div className="tree"></div>
							</div>
							<div className="chunk-2">
								<div className="tree"></div>
								<div className="tree"></div>
								<div className="tree"></div>
								<div className="bush"></div>
								<div className="tree"></div>
								<div className="tree"></div>
							</div>
						</div>
						<div className="layer-2">
							<div className="chunk-1">
								<div className="house"></div>
								<div className="house"></div>
								<div className="house"></div>
							</div>
							<div className="chunk-2">
								<div className="house"></div>
								<div className="house"></div>
								<div className="house"></div>
								<div className="house"></div>
							</div>
						</div>
						<div className="hill"></div>
					</div>
					<div className="content">
						<h2>
							Your order is on its way!
      </h2>
						<p>
							Check your mail box for a tracking code and estimated delivery time.
      </p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PopupOverlay
