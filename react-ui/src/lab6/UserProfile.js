import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

import './UserProfile.css'

const UserProfile = () => {
	return (
		<div>



			{/* <FontAwesomeIcon icon={["fas", "coffee"]} /> */}

			<div className="background"></div>
			<div className="profile-card">
				<div className="cover"></div>
				<div className="profile">
					<div className="pic"></div>
					<div className="above-fold">
						<div className="name">Douwe de Vries</div>
						<div className="role">UX Engineer</div>
						<div className="location">
							<i className="fas fa-map-marker-alt"></i>
							Gouda, the Netherlands
						</div>
						<div className="row">
							<div className="button">FOLLOW</div>
							<div className="button">MESSAGE</div>
						</div>
						<div id="expand-button">
							{/* <i className="fas fa-arrow-down">
								↓
							</i> */}
							<FontAwesomeIcon icon={faArrowCircleDown} />
						</div>
					</div>
					<div className="below-fold">
						<div className="about">
							<h3>About</h3>
							<p>Hi, I am Douwe de Vries, 28 summers young and I am passionate about User Experiences, Design, Front-end development and game development. Like to talk about any of these things? Shoot me a message!</p>
						</div>
						<div className="row stats">
							<div className="stat">
								<label>Posts</label>
								<div className="num">956</div>
							</div>
							<div className="stat">
								<label>Followers</label>
								<div className="num">312</div>
							</div>
							<div className="stat">
								<label>Following</label>
								<div className="num">104</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserProfile
