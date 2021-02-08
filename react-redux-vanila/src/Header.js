import React from 'react'
import { useSelector } from 'react-redux';
import logo from './logo.svg'

const Header = () => {
	const [counter, names] = useSelector(state => {
		return [state.counter, state.names]
	});

	return (
		<div className="App-header-container">
			<div className="App-header">
				<div className="App-logo-container">
					<div className="App-logo">
						<img src={logo} alt="logo" width="40" height="40" />
					</div>
					<div className="App-title">REACT REDUX VANILA DEMO</div>
				</div>

				<div className="list-status" >
					<p>Counter {counter}</p>
					<p>Names {names.length}</p>
				</div>

			</div>
		</div>
	);
}

export default Header
