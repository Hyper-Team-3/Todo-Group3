import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="bg-white p-8 shadow-lg flex">
        <div className="bg-image"></div>
        <div className="login-form flex items-center justify-center w-full text-left mt-24">
          <div className="login-form-container">
            <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input-box"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="input-box"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-6 text-center">
                <button type="submit" className="login-button">
                  Login
                </button>
              </div>
            </form>
            <div className="text-sm text-center">
              <p>Donot have an account yet?</p>
              <a href="#" className="text-blue-500">
                Register here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
