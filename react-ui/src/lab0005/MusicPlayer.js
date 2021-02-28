import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faPause, faForward, faRedoAlt, faListUl, faHeart, faChevronDown, faArrowDown, faHome, } from '@fortawesome/free-solid-svg-icons'

import './MusicPlayer.css'

const MusicPlayer = () => {
	const [expand, setExpand] = useState(false);

	return (
		<div>

			<div className="center">
				<div className={expand ? 'player expand' : 'player'} >
					<div className="album-cover">
						<div className="image"></div>
					</div>
					<div className="panel">
						<div className="info">
							<div className="title">
								Old Town Road
        </div>
							<div className="artist">
								Lil Nas X feat. Billy Ray Cyrus
        </div>
						</div>
						<div className="controls">
							<div className="playback">
								<div className="backward">
									{/* <i className="fas fa-backward"></i> */}
									<FontAwesomeIcon icon={faBackward} />
								</div>
								<div className="play">
									{/* <i className="fas fa-pause"></i> */}
									<FontAwesomeIcon icon={faPause} />
								</div>
								<div className="forward">
									{/* <i className="fas fa-forward"></i> */}
									<FontAwesomeIcon icon={faForward} />
								</div>
							</div>
							<div className="repeat">
								{/* <i className="fas fa-redo-alt"></i> */}
								<FontAwesomeIcon icon={faRedoAlt} />
							</div>
							<div className="playlist">
								{/* <i className="fas fa-list-ul"></i> */}
								<FontAwesomeIcon icon={faListUl} />
							</div>
							<div className="heart">
								{/* <i className="fas fa-heart"></i> */}
								<FontAwesomeIcon icon={faHeart} />
							</div>
						</div>
						<div id="expand-button">
							{/* <i className="fas fa-chevron-down fa-2x"></i> */}
							<button onClick={() => {
								setExpand(!expand);
							}}>
								<FontAwesomeIcon icon={faChevronDown} size="2x" />
							</button>
						</div>
						<div className="timeline">
							<div className="current-time">
								1:26
        </div>
							<div className="line">
								<div className="current"></div>
							</div>
							<div className="total-time">
								2:37
        </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MusicPlayer
