import { useState } from "react";

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="component-box">
      <h2>Q3. Login Toggle</h2>

      {isLoggedIn ? (
        <div>
          <h3>Welcome! You are logged in.</h3>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
}

export default LoginToggle;
