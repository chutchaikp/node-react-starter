import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBackward, faPause, faForward, faRedoAlt, faListUl,
	faHeart, faChevronDown, faArrowDown,
} from '@fortawesome/free-solid-svg-icons'

import './MusicPlayerEdit.css'

const MusicPlayerEdit = () => {
	const [expand, setExpand] = useState(false);
	return (
		<div className="container">

			<div className="box-overflow">
				<div className="pic"></div>

				<div className={expand ? 'box expand' : 'box'}>

					<div className="box-item">



						<div className="content">
							<div className="title">
								Old Town Road
        		</div>
							<div className="artist">
								Lil Nas X feat. Billy Ray Cyrus
        		</div>
						</div>

						<div className="expand-button">
							<button onClick={() => setExpand(!expand)} >
								<FontAwesomeIcon size="2x" icon={faChevronDown} />
							</button>
						</div>
						<div className="line"></div>
					</div>

				</div>

			</div>
		</div>

	);

	// const [isExpand, setIsExpand] = useState(false);
	// return (		
	// 		<div className="center">
	// 			<div className="player">

	// 				<div className="panel">						


	// 					<div className="timeline">
	// 						<div className="line">
	// 						</div>
	// 					</div>
	// 				</div>


	// 			</div>
	// 		</div>

	// )
}

export default MusicPlayerEdit
