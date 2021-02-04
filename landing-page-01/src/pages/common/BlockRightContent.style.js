import styled from "styled-components";

const blue = '#007cba';

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
	font-size: 16px;
line-height: 2rem;
font-weight: 400;
`;

export const Box = styled.div`
	background-color: violet;
	height: 200px;
	width: 200px;
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

export const ButtonLight = styled.button`
	color: black;
	
	font-size: 13px;
		border-radius: 0;
		text-transform: uppercase;
		font-weight: 700;
		padding: 16px 40px;
		min-width: 162px;

	/* 36px; */
	border: 0;
	box-shadow: inset 0 0 1px 1px #1ac6ff;
	background-color: #fff;

	margin: 10px;
	transition: width .2s ease-in-out;

	/* &:hover{
		width: 400px;
	} */
	&:focus {
		outline: 0;
	}
	
`;