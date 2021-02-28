// https://codepen.io/mubangadv/pen/wyeJqY

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBars, faHome, faComments, faHeart,
} from '@fortawesome/free-solid-svg-icons'


import './Rotate.css'

const Rotate = () => {
	const [rotate, setRotate] = useState(false);
	return (
		<div>
			<button onClick={() => setRotate(!rotate)} >Rotate</button>
			<div>

				<input type="checkbox" id="toggle" />
				<label for="toggle">
					{/* <span class="fa fa-navicon fa-2x"></span> */}
					<FontAwesomeIcon icon={faBars} />
				</label>

				<div class='container'>

					<div className={rotate ? 'circle rotate' : 'circle'}>

						<FontAwesomeIcon className="deg5" size="3x" icon={faHome} />
						<FontAwesomeIcon className="deg40" icon={faComments} />
						<FontAwesomeIcon className="deg85" icon={faHeart} />

					</div>

				</div>

			</div>

		</div>
	)
}

export default Rotate
