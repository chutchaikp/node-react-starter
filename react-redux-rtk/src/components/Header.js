import React from 'react'
import { selectCount } from '../features/counter/counterSlice';
import { allName } from '../features/names/namesSlice'

import { useSelector } from 'react-redux'

export default function Header() {
	const counter = useSelector(selectCount);
	const names = useSelector(allName);

	return (
		<div className="header-wrapper" >
			<h1>Header</h1>
			<div>
				<div>Counter {counter} </div>
				<div>Names {names.length} </div>
			</div>
			{/* <ul>
				{names.map((n, idx) => {
					return (
						<li key={idx} >{n}</li>
					);
				})}
			</ul> */}
		</div>
	)
}
