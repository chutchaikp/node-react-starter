import React, { useState } from 'react'
import './OnOffSwitch.css'

const OnOffSwitch = () => {

	const [down, setDown] = useState(false);
	const [up, setUp] = useState(false);

	const [isOn, setIsOn] = useState(false);

	return (
		<div className={isOn ? 'xbody on' : 'xbody'}>
			On/Off
			<div className="wall"></div>
			<div className="floor"></div>
			<div className="lamp">
				<div className="shade">
					<div className="top"></div>
					<div className="bottom"></div>
				</div>
				<div className="trigger"
					onMouseDown={() => {
						setUp(false);
						setDown(true);
					}
					}
					onMouseUp={() => {
						setUp(true);
						setDown(false);

						setIsOn(!isOn);
					}}
				>
					<div className={down ? 'rope down' : "rope"}></div>
				</div>
				<div className="stand"></div>
				<div className="base"></div>
			</div>
			<div className="glow">
				<div className="bottom-glow"></div>
				<div className="top-glow"></div>
				<div className="shade">
					<div className="top"></div>
					<div className="bottom"></div>
				</div>
				<div className="blur">
					<div className="bottom-glow"></div>
					<div className="top-glow"></div>
					<div className="shade">
						<div className="top"></div>
						<div className="bottom"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OnOffSwitch
