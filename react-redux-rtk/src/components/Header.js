import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from '../features/counter/counterSlice';
import { allName } from '../features/names/namesSlice'

import logo from '../logo.svg'

export default function Header() {
	const counter = useSelector(selectCount);
	const names = useSelector(allName);

	return (
		<div className="App-header-container">
			<div className="App-header">
				<div className="App-logo-container">
					<div className="App-logo">
						<img src={logo} alt="logo" width="40" height="40" />
					</div>
					<div className="App-title">REACT REDUX RTK DEMO</div>
				</div>

				<div className="list-status" >
					<p>Counter {counter}</p>
					<p>Names {names.length}</p>
				</div>

			</div>
		</div>
	);

}
