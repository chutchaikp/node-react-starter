import React from 'react'
import { Col, Row } from 'antd';
// import { title, text } from '../content/AboutContent.json';
import * as S from './BlockMiddleContent.style'
import Fade from 'react-reveal/Fade';

import { IconSvg } from './IconSvg'

import 'antd/dist/antd.css';

const BlockMiddleContent = ({ title, text, buttons, }) => {

	return (
		<S.Container>

			<S.Wrapper>
				<Row align="middle" justify="center"  >
					<Col xs={24} sm={12} md={12} align="center" >
						<Fade top distance="100px" duration={400} >
							<S.Title>{title}</S.Title>
							<S.Para>{text}</S.Para>
							{buttons && buttons.map((b) => {
								return (
									<S.ButtonDark>{b.text}</S.ButtonDark>
								)
							})}
						</Fade>
					</Col>
				</Row>
			</S.Wrapper>

		</S.Container>
	)
}

export default BlockMiddleContent;
