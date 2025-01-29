import React, { useState } from "react";
import axios from 'axios';
import './Login.css'; // นำเข้าไฟล์ CSS

export default function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // ป้องกันไม่ให้ฟอร์มรีเฟรชหน้า
        try {
            const response = await axios.post('http://localhost:8000/api/login', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="text-center">
                    <h1 className="title">Hello</h1>
                    <h2 className="subtitle">WELCOME!</h2>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>
                    {errorMessage && (
                        <div className="error-message">{errorMessage}</div>
                    )}
                    <div className="remember-me">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">remember me</label>
                    </div>
                    <button type="submit" className="login-button">log in</button>
                    <div className="signup-link">
                        <span>not a member?</span>
                        <a href="#">sign up</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
