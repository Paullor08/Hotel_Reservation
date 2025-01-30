import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // นำเข้าไฟล์ CSS

export default function RegisterComponent() {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault(); // ป้องกันไม่ให้ฟอร์มรีเฟรชหน้า
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/api/register', { username, email, password });
            setSuccessMessage('Registration successful! Please log in.');
            setErrorMessage('');
            navigate('/login')
        } catch (error) {
            console.error('Registration failed:', error);
            setErrorMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="text-center">
                    <h1 className="title">Create Account</h1>
                </div>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <input
                            type="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>
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
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>
                    {errorMessage && (
                        <div className="error-message">{errorMessage}</div>
                    )}
                    {successMessage && (
                        <div className="success-message">{successMessage}</div>
                    )}
                    <button type="submit" className="register-button">Register</button>
                    <div className="login-link">
                        <span>Already a member?</span>
                        <a href="/login">Log in</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
