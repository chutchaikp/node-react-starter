import { Col, Row } from 'antd';
import React from 'react'
import Fade from 'react-reveal/Fade';

import { IconSvg } from './IconSvg';

import * as S from './BlockLeftContent.style'


const BlockLeftContent = ({ id, title, text, icon, buttons }) => {
	return (
		<S.Container id={id}>

			<S.Wrapper>

				<Row align="middle"  >

					<Col xs={24} sm={12} md={12}>
						<Fade right distance="200px" duration={500} >
							<S.Title>{title}</S.Title>
							<S.Para>{text}</S.Para>
							<Row justify="space-around" align="middle">
								<Col>
									{buttons && buttons.map((b) => {
										if (b.type === 'light') {
											return (
												<S.ButtonLight>{b.text}</S.ButtonLight>
											)
										}
										return (
											<S.ButtonDark>{b.text}</S.ButtonDark>
										);
									})}
								</Col>
							</Row>
						</Fade>
					</Col>

					<Col xs={24} sm={12} md={12} align="center">
						<Fade left distance="200px" duration={800} >
							<IconSvg src={icon} width="60%" height="60%" />
						</Fade>
					</Col>

				</Row>
			</S.Wrapper>

		</S.Container>
	)
}

export default BlockLeftContent;
