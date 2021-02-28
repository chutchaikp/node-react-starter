import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="container">
		
        <h2>
          Sign Up
        </h2>
        <div className="field">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
					<label className={name.length > 0 ? 'touched' : ''}>your name</label>
        </div>
        <div className="field">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
					<label className={email.length > 0 ? 'touched' : ''}>email</label>
        </div>
        <div className="field">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<label className={password.length > 0 ? 'touched' : ''}>password</label>
        </div>
        <input type="submit" value="Sign Up" />
      </div>
    
	);

}
export default Signup

function Signup2() {
	return (
		<div>
			Signup
			

			<div className="welcome">
  <div className="info">
    <h1>
      you<span>money</span>
    </h1>
    <h4>
      Your digital accountant
    </h4>
    <div className="switch-signin">
      <p>
        Have an account?
      </p>
      <button className="switch">SIGN IN</button>
    </div>
    <div className="switch-signup">
      <p>
        No account?
      </p>
      <button className="switch">SIGN UP</button>
    </div>
  </div>
  <div className="form-panel">
    <div className="signup">
      <div >
        <h2>
          Sign Up
        </h2>
        <div className="field">
          <input type="text" /><label>your name</label>
        </div>
        <div className="field">
          <input type="email" /><label>email</label>
        </div>
        <div className="field">
          <input type="password" /><label>password</label>
        </div>
        <input type="submit" value="Sign Up" />
      </div>
    </div>
    <div className="signin">
      <div>
        <h2>
          Sign In
        </h2>
        <div className="field">
          <label>email</label><input type="email" />
        </div>
        <div className="field">
          <label>password</label><input type="password" />
        </div>
        <input type="submit" value="Sign In" />
      </div>
    </div>
  </div>
</div>
		</div>
	)
}


