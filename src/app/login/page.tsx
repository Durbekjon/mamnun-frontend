"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth.service";
import "./style.css";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUserSession = async () => {
      const accessToken = localStorage.getItem("access-token");
      const refreshToken = localStorage.getItem("refresh-token");

      if (accessToken) {
        try {
          const { data: user } = await AuthService.me();
          if (user) {
            router.push("/dashboard"); // If user exists, navigate to dashboard
          } else if (refreshToken) {
            const { data: refreshedTokens } = await AuthService.refreshTokens();
            if (refreshedTokens) {
              localStorage.setItem("access-token", refreshedTokens.accessToken);
              if (rememberMe) {
                localStorage.setItem(
                  "refresh-token",
                  refreshedTokens.refreshToken
                );
              }
              router.push("/dashboard"); // Navigate after successful refresh
            } else {
              logout();
            }
          } else {
            logout();
          }
        } catch (err) {
          logout();
        }
      }
    };

    checkUserSession();
  }, []);

  const logout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    router.push("/login");
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await AuthService.login({ username, password });
      const { accessToken, refreshToken } = response.data;

      localStorage.setItem("access-token", accessToken);
      if (rememberMe) {
        localStorage.setItem("refresh-token", refreshToken);
      }

      router.push("/dashboard");
    } catch (err) {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-footer">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
