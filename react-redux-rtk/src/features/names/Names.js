import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { setAutoFreeze } from 'immer';

import { addName, deleteName, loadAsync, clearNames, updateName, allName, } from './namesSlice';

export const Names = () => {
	const names = useSelector(allName)
	const dispatch = useDispatch();

	const [name, setName] = useState({ value: 'A', selected: false });

	return (
		// <div>
		// 	<h3>Names</h3>
		// 	<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
		// 	<button onClick={() => dispatch(addName(name))}>Add</button>
		// 	<button onClick={() => dispatch(deleteName(name))} >Delete</button>
		// 	<button onClick={() => dispatch(loadAsync())}>Load Async</button>
		// 	<button onClick={() => dispatch(clearNames())} >Clear</button>

		// 	<ul>
		// 		{names.map((n, idx) => {
		// 			return (
		// 				<li key={idx}>{n}</li>
		// 			)
		// 		})}
		// 	</ul>
		// </div>
		<div className="names-container">
			<h3>Names</h3>

			<input className="names-input" type="text" value={name.value}
				onChange={(e) => setName({ value: e.target.value, selected: false })} />

			<button className="names-button" onClick={() => dispatch(addName(name))}>Add</button>
			<button className="names-button" onClick={() => dispatch(clearNames())}>Clear</button>
			<button className="names-button" onClick={() => dispatch(loadAsync())}>Load Async</button>
			<button className="names-button" onClick={() => dispatch(deleteName())}>Delete</button>

			{names instanceof Array && names.length > 0 && (
				<button className="names-button" onClick={() => {
					names.map((n) => n.selected = true);
					dispatch(updateName());
				}}>Check all</button>
			)}

			<ul>
				{names.map((n, idx) => {
					return (
						<li key={idx}>
							<input type="checkbox"
								checked={n.selected || false}
								onChange={(e) => {
									try {
										dispatch(updateName({ index: idx, selected: e.target.checked }));
									} catch (error) {
										console.log(error);
									}
								}}
							/>
							{n.value}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

