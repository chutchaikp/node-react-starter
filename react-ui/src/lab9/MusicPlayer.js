import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faPause, faForward, faRedoAlt, faListUl, faHeart, faChevronDown, faArrowDown, } from '@fortawesome/free-solid-svg-icons'

import './MusicPlayer.css'

const MusicPlayer = () => {

	const [isExpand, setIsExpand] = useState(false);
	return (
		<div>
			<div className="center">
				<div className={isExpand ? 'player expand' : 'player'}>

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
									<FontAwesomeIcon size="1x" icon={faBackward} />
								</div>
								<div className="play">
									{/* <i className="fas fa-pause"></i> */}
									<FontAwesomeIcon size="1x" icon={faPause} />
								</div>
								<div className="forward">
									{/* <i className="fas fa-forward"></i> */}
									<FontAwesomeIcon size="1x" icon={faForward} />
								</div>
							</div>
							<div className="repeat">
								{/* <i className="fas fa-redo-alt"></i> */}
								<FontAwesomeIcon size="1x" icon={faRedoAlt} />
							</div>
							<div className="playlist">
								{/* <i className="fas fa-list-ul"></i> */}
								<FontAwesomeIcon size="1x" icon={faListUl} />
							</div>
							<div className="heart">
								{/* <i className="fas fa-heart"></i> */}
								<FontAwesomeIcon size="1x" icon={faHeart} />
							</div>
						</div>
						<div id="expand-button">
							{/* <i className="fas fa-chevron-down fa-2x"></i> */}
							<button onClick={() => setIsExpand(!isExpand)}>
								<FontAwesomeIcon size="2x" icon={faChevronDown} />
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
