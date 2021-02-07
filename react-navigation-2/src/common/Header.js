import React, { useState } from 'react'
import logo from '../logo.svg';
import '../App.css'
import { Link } from 'react-router-dom';

import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';

function Header() {
	const [showDrawer, setShowDrawer] = useState(false);
	return (
		<div className="App-header-container">

			<div className="App-header">

				<div className="App-logo-container">
					<div className="App-logo">
						<img src={logo} alt="logo" width="80" height="80" />
					</div>
					<div className="App-title"> REACT NAVIGATION DEMO II </div>
				</div>


				<div>
					<ul className="App-link">
						<li>
							<Link to="/" >Home</Link>
						</li>
						<li>
							<Link to="/posts">Posts</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
					<div className="button-outlined">
						<MenuOutlined size="32" onClick={() => setShowDrawer(true)} />
						<Drawer closable={false} visible={showDrawer} onClose={() => setShowDrawer(false)}>
							<NavMenu />
						</Drawer>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Header

const NavMenu = () => {
	return (
		<ul className="menu-outlined" >
			<li>
				<Link to="/" >Home</Link>
			</li>
			<li>
				<Link to="/posts">Posts</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
		</ul>
	);
}
