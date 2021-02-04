import React from 'react'
import { Col, Row } from 'antd';
// import { title, text } from '../content/AboutContent.json';
import * as S from './BlockRightContent.style'
import Fade from 'react-reveal/Fade';

import { IconSvg } from './IconSvg'

import 'antd/dist/antd.css';

const BlockRightContent = ({ id, title, text, icon }) => {

	return (
		<S.Container id={id}>

			<S.Wrapper>
				<Row align="middle"  >
					<Col xs={24} sm={12} md={12} align="center">
						<Fade left distance="200px" duration={800} >
							<IconSvg src={icon} width="60%" height="60%" />
						</Fade>
					</Col>
					<Col xs={24} sm={12} md={12}>
						<Fade right distance="200px" duration={500} >
							<S.Title>{title}</S.Title>
							<S.Para>{text}</S.Para>
						</Fade>
					</Col>
				</Row>
			</S.Wrapper>

		</S.Container>
	)
}

export default BlockRightContent;
