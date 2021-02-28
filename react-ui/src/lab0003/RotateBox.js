import React from 'react'
import './RotateBox.css'

const RotateBox = () => {
	return (
		<div>
			Rotate box ..

			<div className="frame">
				<div className="center">
					<div className="down">
						<div className="up">
							<div className="rotate-in">
								<div className="rotate-out">
									<div className="squash">
										<div className="square"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="shadow"></div>
				</div>
			</div>
		</div>
	)
}

export default RotateBox
