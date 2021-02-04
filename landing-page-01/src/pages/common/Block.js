import React from 'react'

export default function Block({ posts }) {
	return (
		<ul>
			{posts.map((p) => {
				return (
					<li key={p.id}>{p.title}</li>
				);
			})}
		</ul>
	)
}
