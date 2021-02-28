// Learn ui
// https://codepen.io/mubangadv/pen/rXrOQa


import React from 'react'
import './Chat.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Chat() {
	return (
		<div className="center">

			<div className="contacts">
				{/* <i className="fas fa-bars fa-2x"></i> */}
				<FontAwesomeIcon icon={faBars} size="lg" />
				{/* <FontAwesomeIcon icon={faCoffee} /> */}
				<h2> Contacts </h2>
				<div className="contact">
					<div className="pic rogers"></div>
					<div className="badge">
						14
      </div>
					<div className="name">
						Steve Rogers
      </div>
					<div className="message">
						That is America's ass 🇺🇸🍑
      </div>
				</div>
				<div className="contact">
					<div className="pic stark"></div>
					<div className="name">
						Tony Stark
      </div>
					<div className="message">
						Uh, he's from space, he came here to steal a necklace from a wizard.
      </div>
				</div>
				<div className="contact">
					<div className="pic banner"></div>
					<div className="badge">
						1
      </div>
					<div className="name">
						Bruce Banner
      </div>
					<div className="message">
						There's an Ant-Man *and* a Spider-Man?
      </div>
				</div>
				<div className="contact">
					<div className="pic thor"></div>
					<div className="name">
						Thor Odinson
      </div>
					<div className="badge">
						3
      </div>
					<div className="message">
						I like this one
      </div>
				</div>
				<div className="contact">
					<div className="pic danvers"></div>
					<div className="badge">
						2
      </div>
					<div className="name">
						Carol Danvers
      </div>
					<div className="message">
						Hey Peter Parker, you got something for me?
      </div>
				</div>
			</div>


		</div>


		// <div className={styles.container}>

		// 	<div style={{ flexGrow: 1, flexBasis: 'auto' }}>
		// 		Chat ...


		// 	</div>

		// 	<div style={{ flexBasis: '80px', textAlign: 'center', }}>
		// 		<button className={styles.button}>Buy now</button>
		// 	</div>
		// </div>
	)
}
