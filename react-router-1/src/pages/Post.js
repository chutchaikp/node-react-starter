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

	return (
		<div>
			Post
		</div>
	)
}
