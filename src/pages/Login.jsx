import React, { useState } from "react";
import axios from 'axios';

export default function Login_cp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handdlelogin = async (e) => {
        e.preventDefault();

        try {
            const response = await
                axios.post('http://localhost:8000/api/login', { email, password });
            // เก็บ token ใน localStorage หรือ state 
            localStorage.setItem('token', responsse.data.token);
            alert('Login Succesfully');
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Invalid email or password');
        }
    };


    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-md p-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Hello</h1>
                    <h2 className="text-xl mb-6">WELCOME!</h2>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // อัปเดตสถานะเมื่อมีการเปลี่ยนแปลง
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // อัปเดตสถานะเมื่อมีการเปลี่ยนแปลง
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    {errorMessage && (
                        <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
                    )}
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="remember-me"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            remember me
                        </label>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-[#C1DCDC] text-black font-bold py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            log in
                        </button>
                    </div>
                    <div className="text-center">
                        <span className="text-sm text-black">not a member?</span>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            sign up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}