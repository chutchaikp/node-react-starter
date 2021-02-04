
import React from 'react'
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import * as S from './ContactForm.style'

import 'antd/dist/antd.css';

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};

const ContactForm = () => {

	const onFinish = (values) => {
		console.log(values);
	};

	return (
		<S.Container>
			<S.Wrapper>

				<Row type="flex" justify="center" >
					<Col xs={24} sm={12} md={12}>
						<S.Title>							Contact Form						</S.Title>
						<S.Para>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed maxime possimus, iure voluptatum ipsa culpa.
						</S.Para>
					</Col>
					<Col xs={24} sm={12} md={12}>
						<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

							<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
								<Input size="large" />
							</Form.Item>
							<Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
								<Input size="large" />
							</Form.Item>
							<Form.Item name={['user', 'introduction']} label="Message">
								<Input.TextArea size="large" />
							</Form.Item>
							<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
								<Button size="large" type="primary" htmlType="submit">Submit</Button>
							</Form.Item>
						</Form>

					</Col>
				</Row>

			</S.Wrapper>
		</S.Container>
	)
}

export default ContactForm;
