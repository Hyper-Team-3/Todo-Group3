import { useState } from "react";
import { useCookies } from "react-cookie";
import "./Auth.css";

const Auth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const passwordCheck = (password) => {
    if (!isLogin) {
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return false;
      }
      if (password.length < 8) {
        setError("The password should be longer than 8 characters");
        return false;
      }
      if (!/\d/.test(password)) {
        setError("The password should include at least one number");
        return false;
      }
      if (!/[a-z]/.test(password)) {
        setError("The password should include at least one lowercase letter");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();

    const isPasswordValid = passwordCheck(password);

    if (!isPasswordValid) {
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_SERVERURL}/${endpoint}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response?.json();
    if (data.detail) {
      setError(data.detail);
    } else {
      console.log(data, "data successfully");
      setCookie("Email", data.email);
      setCookie("AuthToken", data.token);

      window.location.reload();
    }
  };

  const toggleLoginForm = (status) => {
    setIsLogin(status);
    setError("");
  };

  const isSubmitDisabled = !(
    (isLogin && email && password) ||
    (!isLogin && email && password && confirmPassword)
  );

  return (
    <div className="register-container">
      <div className="bg-image"></div>
      <div className="create-account flex items-center justify-center px-6">
        <div className="auth-container-box">
          <h2 className="join-text">
            {isLogin ? "Please log in" : "Please sign up!"}
          </h2>
          <form
            className="auth-container-form"
            onSubmit={
              isLogin
                ? (e) => handleSubmit(e, `login`)
                : (e) => handleSubmit(e, "signup")
            }
          >
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
            <button
              type="submit"
              className="login-button"
              disabled={isSubmitDisabled}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <div className="auth-options"></div>
          <div className="text-sm text-center">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button
              onClick={() => toggleLoginForm((l) => !l)}
              className="text-blue-500"
            >
              {isLogin ? "Sign up here" : "Login here"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
