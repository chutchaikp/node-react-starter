import axios from 'axios';
import React, { useEffect, useState } from 'react'

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

				<div className="heading">{post.title}</div>
				<div className="sub-heading">{post.body}</div>
			</div>
		</div>
	)
}
