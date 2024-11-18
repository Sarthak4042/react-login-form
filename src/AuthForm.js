import React, { useState } from "react";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [contact, setContact] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            alert("Successfully completed the action🥳");
        } else {
            alert("Please fill in all fields");
        }
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (fullName && password && contact) {
            alert("Submitted");
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Sign Up</button>
                </div>
                {isLogin ? (
                    <div className="form">
                        <h2>Login Form</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLoginSubmit}>Login</button>
                        <p>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Click to get one</a></p>
                    </div>
                ) : (
                    <div className="form">
                        <h2>Sign Up Form</h2>
                        <input
                            type="text"
                            placeholder="Full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Contact"
                            value={contact}
                            onChange={(e) => {
                                if (e.target.value.length <= 10) {
                                    setContact(e.target.value);
                                }
                            }}
                        />
                        <button onClick={handleSignUpSubmit}>Sign Up</button>
                        <p>Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Click to login</a></p>
                    </div>
                )}
            </div>
        </div>
    );
}
