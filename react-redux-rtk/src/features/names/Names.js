import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { setAutoFreeze } from 'immer';

import { addName, deleteName, loadAsync, clearNames, selectName, selectAllName, allName, } from './namesSlice';

export const Names = () => {
	const names = useSelector(allName)
	const dispatch = useDispatch();

	const [name, setName] = useState({ value: 'A', selected: false });

	return (

		<div className="app-container">
			<div className="names-container">

				<h3>Names</h3>
				<input className="text-input" type="text" value={name.value}
					onChange={(e) => setName({ value: e.target.value, selected: false })} />

				<button className="text-button" onClick={() => dispatch(addName(name))}>Add</button>
				<button className="text-button" onClick={() => dispatch(clearNames())}>Clear</button>
				<button className="text-button" onClick={() => dispatch(loadAsync())}>Load Async</button>
				<button className="text-button" onClick={() => dispatch(deleteName())}>Delete</button>

				{names instanceof Array && names.length > 0 && (
					<button className="names-button" onClick={() => {
						dispatch(selectAllName());
					}}>Check all</button>
				)}

				<ul>
					{names.map((n, idx) => {
						return (
							<li key={idx}>
								<input type="checkbox"
									checked={n.selected || false}
									onChange={(e) => {
										dispatch(selectName({ index: idx, selected: e.target.checked }));
									}}
								/>
								{n.value}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

