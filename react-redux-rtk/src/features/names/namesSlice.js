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
			const res = state.filter((u) => {
				return u.selected === false
			});
			return res;
		},
		selectName: (state, action) => {
			const pl = action.payload;
			state.map((n, idx) => {
				if (idx === pl.index) {
					n.selected = pl.selected;
				}
				return n;
			});
		},
		selectAllName: (state, action) => {
			state.map((n) => n.selected = true);
		},
		loadDataAsync: (state, action) => {
			const data = action.payload.map((n) => {
				return { value: n.name, selected: false };
			});
			return [...state, ...data];
		},
		clearNames: () => {
			return [];
		},
	}
});

// export to ui
export const { addName, deleteName, loadDataAsync, clearNames, selectName, selectAllName, } = namesSlice.actions;
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