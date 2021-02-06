import React from 'react'

import './Nav.style.css'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div className="nav">
			<div>
				<img src={logo} className="App-logo" alt="logo" width="100" height="100" />
			</div>
			<div>
				<ul className="nav-link">
					<Link to="/home">Home</Link>

					<Link to="/posts">Posts</Link>

					<Link to="/about" >About</Link>
				</ul>
			</div>

		</div>
	)
}
