import React, { useState } from 'react'
import { Col, Drawer, Row } from 'antd'

// import { ButtonOutlined, Container, Header, NavLink, NavMenu, NavMenuItem } from './styles'
import * as S from './Header.style';

import 'antd/dist/antd.css';
import { IconSvg } from './IconSvg';

const Header = () => {

	const [visible, setVisible] = useState(false);

	const scrollTo = (id) => {
		try {
			const element = document.getElementById(id);
			element.scrollIntoView({
				behavior: 'smooth'
			});
		} catch (error) {
		}
	}

	return (
		<S.Header id="header">
			<S.Container>
				<Row gutter={25} justify="space-between" align="middle">

					<Col>
						<IconSvg src="logo.svg" height="40" width="120" />
					</Col>
					<Col>

						<Drawer closable={true} visible={visible} onClose={() => { setVisible(false) }}>
							<Col>
								Menu ....
								...
						</Col>
						</Drawer>

					</Col>
					<Col>
						<S.NavLink >
							<S.NavMenu>
								<S.NavMenuItem onClick={() => scrollTo('about')}>About</S.NavMenuItem>
								<S.NavMenuItem onClick={() => scrollTo('mission')}>Mission</S.NavMenuItem>
								{/* <S.NavMenuItem onClick={() => scrollTo('product')}>Product</S.NavMenuItem> */}
								<S.NavMenuItem onClick={() => scrollTo('contact')}>Contact</S.NavMenuItem>
							</S.NavMenu>
						</S.NavLink>
						<S.ButtonOutlined onClick={() => { setVisible(true) }} />
					</Col>
				</Row>
			</S.Container>
		</S.Header >
	)
}

export default Header;
