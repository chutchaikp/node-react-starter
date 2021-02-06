import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const namesSlice = createSlice({
	name: 'names',
	initialState: [],
	reducers: {
		addName: (state, action) => {
			return [...state, action.payload];
		},
		deleteName: (state, action) => {
			return state.filter((n) => {
				return n !== action.payload;
			});
		},
		loadDataAsync: (state, action) => {
			const data = action.payload.map((n) => {
				return n.name;
			});
			return [...state, ...data];
		},
		clearNames: () => {
			return [];
		},
	}
});

// export to ui
export const { addName, deleteName, loadDataAsync, clearNames, } = namesSlice.actions;
export const allName = state => state.names;
export const loadAsync = () => async dispatch => {
	try {
		const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
		dispatch(loadDataAsync(resp.data));
	} catch (error) {
		debugger;
	}
}

// export to store
export default namesSlice.reducer;