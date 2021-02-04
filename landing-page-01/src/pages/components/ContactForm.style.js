import styled from "styled-components";

export const Container = styled.header`
	padding: 3rem 0.5rem; 	/* background-color: violet; */
`;

export const Wrapper = styled.div`
	position: relative;
	max-width: 1280px;
	width: 100%;
	padding: 0 25px 0 25px;
	margin-left: auto;
	margin-right: auto;
	
`;

export const Title = styled.h1`
	font-size: 55px;
	line-height: 3.8rem;
	margin-top: 2rem;
`;

export const Para = styled.p`
	font-size: 20px;

`;


export const ButtonDark = styled.button`
	border: 1px solid transparent;
    border-top: 3px solid transparent;
		background: #1ac6ff;
    color: #fff;
		font-size: 13px;
		border-radius: 0;
		text-transform: uppercase;
		font-weight: 700;
		padding: 16px 40px;
		min-width: 162px;
`;
