import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addName, deleteName, loadAsync, clearNames, allName, } from './namesSlice';

export const Names = () => {
	const names = useSelector(allName)
	const dispatch = useDispatch();

	const [name, setName] = useState('A');

	return (
		<div>
			<h3>				Names			</h3>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={() => dispatch(addName(name))}>Add</button>
			<button onClick={() => dispatch(deleteName(name))} >Delete</button>
			<button onClick={() => dispatch(loadAsync())}>Load Async</button>
			<button onClick={() => dispatch(clearNames())} >Clear</button>

			<ul>
				{names.map((n, idx) => {
					return (
						<li key={idx}>{n}</li>
					)
				})}
			</ul>

		</div>
	)
}

