import React, { useState } from 'react'
import './Styles.css';

const Animation1 = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="container">
			Alert popup / transition / transform / scale & opacity
			<div>
				<button onClick={() => setShow(!show)} >show/hide alert</button>
			</div>
			<div
				className="alert"
				style={{
					transform: show ? 'scale(1.5)' : '',
					opacity: show ? 1 : 0,
				}}
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsam provident nostrum dolor qui ratione. Sunt dolores unde maxime aliquid!
			</div>

		</div>
	)
}

export default Animation1
