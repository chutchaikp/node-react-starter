// import One from '/svg2/1.svg';
import styled, { keyframes } from "styled-components";

// export const SvgOne = styled(One)`
// 	width: 100px;
// 	height: 100px;
// `;

const move = keyframes`
	from {
		left: 0px;
		height: 100px;
	}
	
	to {
		left: 500px;
		height: 120px;
	}
`;

export const Container = styled.div`	
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	position: absolute;
	left: 0;
	top: 100px;	

	animation: ${move} 2s linear infinite;
`;