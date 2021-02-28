import React from 'react'
import styles from './Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			Home

			<div className={styles.hero}></div>

			<ul>
				<li>Home</li>
				<li>Posts</li>
				<li>About</li>
			</ul>

			<div className={styles.border}></div>
			<div className={styles.border1}></div>

			<p>Position absolute work with relative</p>
			<div className={styles.positionContainer} >
				<div className={styles.positionItem}></div>
			</div>

		</div>
	)
}
