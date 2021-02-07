import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './styles.css'

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
				<div className="title">
					JSON Placeholder Posts
				</div>

				<ul>
					{posts.map((p) => {
						return (
							<li key={p.id}>
								<Link to={`/post/${p.id}`} >
									{p.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	)
}
