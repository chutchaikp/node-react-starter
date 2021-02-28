import React from 'react'
import './DirectMessaging.css'

const DirectMessageEdit = () => {
	return (
		<div className="center">

			<div className="chat">
				
				<div className="contact bar">
					<div className="pic stark"></div>
					<div className="name">Tony Stark</div>
					<div className="seen">Today at 12:56</div>
				</div>

				<div className="messages" id="chat">
					<div className="time">Today at 11:41</div>
					<div className="message parker">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, illo.
		      </div>
					<div className="message stark">
						Lorem ipsum dolor sit amet.
      </div>

				</div>
				<div className="input">
					<i className="fas fa-camera"></i><i className="far fa-laugh-beam"></i>
					<input placeholder="Type your message here!" type="text" /><i className="fas fa-microphone"></i>
				</div>
			</div>

		</div>
	)
}

export default DirectMessageEdit
