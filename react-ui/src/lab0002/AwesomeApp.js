import React from 'react'
import './AwesomeApp.css'

const AwesomeApp = () => {
	return (

		<div class="App" >
			<h1 >Awesome App</h1>
			<span >
				<div class="login" >
					<form class="ModalForm" >
						<h3 ><span >Log In </span><span class="flipper" >Sign Up</span></h3>

						<div class="Input" >
							<label for="username" >User</label>
							<input id="username" autocomplete="false" required="" type="email" placeholder="name@mail.com" />
						</div>

						<div class="Input" >
							<label for="password" >Password</label>
							<input id="password" autocomplete="false" required="" type="password" placeholder="password" />
						</div>

						<button >Log in</button>



					</form>

				</div></span></div>
	)
}

export default AwesomeApp
