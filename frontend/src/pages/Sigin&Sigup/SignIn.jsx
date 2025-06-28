import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to check if form is submitted

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Example sign-in logic, you can replace this with real authentication logic
    if (email === 'manish.sviet02@gmail.com' && password === 'patna@2105') {
      setSubmitted(true); // Successful submission
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="sign-in-container">
      {/* Success Message */}
      {submitted ? (
        <div className="success-message">
          <h2>Sign In Successful!</h2>
          <p>Welcome back, {email}! <Link to="/" className="alert-link"> Go To Website</Link></p>
          
        </div>
      ) : (
        <>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email address</label>
              <input
                type="email"
                placeholder='Enter your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </>
      )}
    </div>
  );
};

export default SignIn;
