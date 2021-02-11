import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, toggleTodo, archive, allTodo } from './todoSlice';

function Todo() {
	const dispatch = useDispatch();
	const globalTodo = useSelector(allTodo);
	const [myTodo, setMyTodo] = useState({
		text: 'My todo 01',
		finished: false,
	});

	// console.log(allTodo);

	return (
		<div className="app-container">

			<h3>Todo</h3>

			{globalTodo.length > 0 && (
				<p> {globalTodo.filter(t => t.finished === false).length} of {globalTodo.length} remaining [

					<a href="return void(0)" onClick={(e) => {
						e.preventDefault();
						dispatch(archive());
					}}>
						archive
					</a>
					]

				</p>
			)}

			<ul className="todo-list">
				{globalTodo && globalTodo.map((td, index) => {
					return (
						<li key={index}>
							<input type="checkbox"
								checked={td.finished || false}
								onChange={(e) => dispatch(toggleTodo({ index, finished: e.target.checked }))} />
							<span className={td.finished ? 'todo-finished' : ''}  >{td.text}</span>
						</li>
					);
				})}
			</ul>

			<input className="text-input" type="text" value={myTodo.text}
				placeholder="Add new todo here"
				onKeyDown={(e) => {
					// Enter is pressed	
					if (e.keyCode === 13) {
						if (myTodo.text === '') return;
						dispatch(addTodo(myTodo));
						setMyTodo({ text: '', finished: false, })
					}
				}}
				onChange={(e) => { setMyTodo({ text: e.target.value, finished: false, }) }} />
			<button onClick={() => {
				if (myTodo.text === '') return;
				dispatch(addTodo(myTodo));
			}} >ADD</button>

		</div>
	)
}

export default Todo
