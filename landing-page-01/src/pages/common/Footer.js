import { Col, Row } from 'antd'
import React from 'react'
import { Container, Para, Title, Wrapper } from './Footer.style'

export default function Footer() {
	return (
		<Container>
			<Wrapper>

				<Row type="flex" justify="space-between">
					<Col span={8}>
						<Title>CONTACT</Title>
						<Para >Tell Us Everything</Para>
						<Para>Do you have any question regarding the project ? Feel free to reach out.</Para>

					</Col>
					<Col span={8}>
						<Title>POLICY</Title>
						<Para>Application Security</Para>
						<Para>Software Principles</Para>
					</Col>
					<Col span={8}>
						<Para>Support Center</Para>
						<Para>Customer Support</Para>
					</Col>
				</Row>

			</Wrapper>
		</Container>
	)
}
