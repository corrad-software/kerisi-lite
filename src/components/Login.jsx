import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login successful:', credentialResponse)
    // Handle the JWT token here
    // You can decode it or send it to your backend
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert('Login successful!')
    }, 1000)
  }

  const handleGoogleError = () => {
    console.error('Google login failed')
    alert('Google login failed. Please try again.')
  }

  const handleEmailLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false)
      console.log('Email login:', { email, password })
      alert('Email login functionality - integrate with your backend')
    }, 1000)
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-branding">
          <div className="logo">
            <div className="logo-circle">K</div>
          </div>
          <h1 className="brand-title">Kerisi Lite</h1>
          <p className="brand-tagline">Simple, powerful financial management</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-box">
          <div className="login-header">
            <h2>Log in to your account</h2>
            <p>Welcome back! Please enter your details.</p>
          </div>

          <form onSubmit={handleEmailLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="google-login-wrapper">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
              theme="outline"
              size="large"
              text="continue_with"
              shape="rectangular"
              width="100%"
            />
          </div>

          <div className="signup-prompt">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>

        <footer className="login-footer">
          <p>&copy; 2025 Kerisi Lite. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Login
