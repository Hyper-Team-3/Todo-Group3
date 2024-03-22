import { useState } from 'react';
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      setError("Make sure passwords match");
      return;
    }

  
    console.log("Form submitted:", { email, password });

  
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const toggleLoginForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <div className="register-container">
      <div className="bg-image"></div>
      <div className="create-account flex items-center justify-center px-6">
        <div className="auth-container-box">
          <h2 className="join-text">{isLogin ? 'Please log in' : 'Please sign up!'}</h2>
          <form className="auth-container-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-box rounded-input"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-box rounded-input"
                placeholder="Password"
                required
              />
            </div>
            {!isLogin && (
              <div className="input-container">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-box rounded-input"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            )}
            {error && <p className="error">{error}</p>}
            <button type="submit" className="login-button">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
          <div className="auth-options">
            <button
              onClick={toggleLoginForm}
              className="text-blue-500"
              style={{ backgroundColor: !isLogin ? 'rgb(255,255,255)' : 'rgb(188, 188, 188)' }}
            >Sign up</button>
            <button
              onClick={toggleLoginForm}
              className="text-blue-500"
              style={{ backgroundColor: isLogin ? 'rgb(255,255,255)' : 'rgb(188, 188, 188)' }}
            >Login</button>
          </div>
          <div className="text-sm text-center">
            <p>
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <button onClick={toggleLoginForm} className="text-blue-500">
              {isLogin ? "Sign up here" : "Login here"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
