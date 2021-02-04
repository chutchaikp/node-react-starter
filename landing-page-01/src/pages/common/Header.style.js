import styled from "styled-components";
// import { ReactComponent as ReactLogo, } from '../logo.svg';
import { MenuOutlined } from '@ant-design/icons'
import React from "react";

// const black = '#383838';
// const grey = '#b3b3b1';
// const blue = '#007cba';
// const red = '#cc1818';

// font-size: 47px 19px 14px [large normal small]

// button-2
// box-shadow: inset 0 0 1px 1px #cc1818;

export const Header = styled.header`
	padding: 1rem 0.5rem; 	/* background-color: violet; */
`;

export const Container = styled.div`
	position: relative;
	max-width: 1280px;
	width: 100%;
	padding: 0 25px 0 25px;
	margin-left: auto;
	margin-right: auto;
	
`;

// export const Logo = styled(ReactLogo)`
// 	height: 5rem;
//   width: 5rem;
//   margin: auto;
// `;

export const NavLink = styled.div`
	@media only screen and (max-width: 768px) {
		display: none;
	}
	display: block;
`;

export const ButtonOutlined = styled(MenuOutlined)`
	@media only screen and (max-width: 768px) {
		display: block !important;
	}
	font-size: 2rem;
	display: none;
`;

export const NavMenu = styled.ul`
	font-size: 1.2rem;
	list-style: none;
	display: flex;	
	flex-direction: row;
	align-items: center;
	margin: 0 !important;
	li {
		padding: 10px;
	}
`;

export const NavMenuItem = styled.li`
	cursor: pointer !important;
	/* background-color: aqua; */
	padding: 5px;
	margin: 5px;
`;
