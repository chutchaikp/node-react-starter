import React from 'react'
import './CssClick.css'

const CssClick = () => {
	return (
		<div className="container">

			<label for="toggle">Popup</label>

			<input type="checkbox" id="toggle" />
			<div class="alert">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus sapiente quaerat reiciendis enim delectus quos ipsa! Ullam, quo assumenda.
				<label for="toggle" className="close"> ✖️ </label>
			</div>

		</div>
	)
}

export default CssClick
