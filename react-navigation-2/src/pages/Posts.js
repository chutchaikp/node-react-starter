import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LinkOutlined } from '@ant-design/icons';

export default function Posts() {

	const [posts, setPost] = useState([]);

	useEffect(() => {
		async function fetchPost() {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
			setPost(data);
		}
		fetchPost();
	}, []);

	return (
		<div className="container">

			<div className="wrapper">
				<h2 className="heading">
					JSON Placeholder Posts
				</h2>

				<ul className="posts">
					{posts.map((p) => {
						return (
							<li key={p.id}>
								<Link to={`/post/${p.id}`} >
									<ListTitle title={p.title} />
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	)
}

const ListTitle = ({ title }) => {
	return (
		<div className="list-title">
			<div className="icon-style">
				<LinkOutlined style={{ fontSize: '20px', color: '#fff' }} />
			</div>
			<p>{title}</p>
		</div>
	);
}