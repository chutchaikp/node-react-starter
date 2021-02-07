import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './styles.css'

export default function Post({ match }) {
	const [post, setPost] = useState({});
	useEffect(() => {
		async function fetchPost() {
			const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
			setPost(data);

			console.log(data);
		}
		fetchPost();
	}, []);

	if (!post) {
		return (
			<div>Loading...</div>
		)
	}
	return (
		<div className="container">
			<div className="wrapper">

				<div className="title">{post.title}</div>
				<div className="body">{post.body}</div>
			</div>
		</div>
	)
}
