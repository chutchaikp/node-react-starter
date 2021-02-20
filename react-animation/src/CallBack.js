import React, { useState, useCallback } from 'react'

import MyButton from './common/MyButton'

export default function CallBack() {
	const [show, setShow] = useState(false);

	// const handleClick = React.useCallback(() => {
	// 	debugger;
	// 	setShow(!show);
	// }, [setShow]);

	const handleClick = useCallback(() => {
		setShow(prev => !prev); // Immutate
	}, []);

	return (
		<div>
			{show ? 'show' : 'hide'}
			<MyButton handleClick={handleClick} >
				Click for Switch
			</MyButton>
		</div>
	)
}
