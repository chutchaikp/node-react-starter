import React, { useState, useEffect } from 'react'
import './Dragable.css'

function Dragable() {

	const [width, setWidth] = useState(100);
	const [height, setHeight] = useState(100);

	useEffect(() => {
		dragElement(document.querySelector(".node"));
	}, []);

	const dragElement = (element) => {
		let dragging, x, y

		const w = element.getBoundingClientRect().width;
		const h = element.getBoundingClientRect().height;
		setWidth(w);
		setHeight(h);

		element.onmousedown = (e) => {
			dragging = false;
			console.log("mouse down")
			document.onmouseup = up;
			document.onmousemove = drag;

			// dragTimer = 
			setTimeout(() => dragging = true, 500);

		}

		let drag = (e) => {
			element.style.left = (e.clientX - width / 2) + "px";
			element.style.top = (e.clientY - height / 2) + "px";
		}

		let up = (e) => {
			if (!dragging) {
				element.classList.toggle("on")
			}
			console.log("mouse up", dragging)
			document.onmousemove = null;
		}

	}

	return (
		<div className="container">

			<div className="node"></div>

		</div>
	)
}

export default Dragable
