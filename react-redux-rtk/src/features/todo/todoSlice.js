import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
	name: 'todo',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			return [...state, action.payload];
			// state.push(action.payload);
		},
		toggleTodo: (state, action) => {
			const payload = action.payload;
			state.map((t, index) => {
				if (index === payload.index) {
					t.finished = payload.finished;
				}
			});
		},
		archive: (state, action) => {
			return state.filter((t) => {
				return t.finished === false;
			});
		}
	}

});

export const { addTodo, toggleTodo, archive, } = todoSlice.actions;
export const allTodo = state => state.todo;
// load async

export default todoSlice.reducer;
