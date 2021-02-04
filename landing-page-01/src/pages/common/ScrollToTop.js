
import React from 'react'
import { Up } from './ScrollToTop.style'

import { IconSvg } from './IconSvg'

export default function ScrollToTop() {
	const scroolUp = () => {
		const element = document.getElementById("header");
		element.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest",
		});
	}

	return (
		<div>
			<Up onClick={scroolUp}>
				<IconSvg src="scroll-top.svg" width="26" height="26" />
			</Up>
		</div>
	)
}
