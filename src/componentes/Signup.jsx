import React, { useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const auth = getAuth();
    const db = getDatabase();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validPassword.test(password)) {
            setError("Password must be at least 6 characters long and contain both letters and numbers.");
            return;
        }

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update user profile
            await updateProfile(user, {
                displayName: firstName,
            });

            // Store additional user information in Realtime Database
            await set(ref(db, 'users/' + user.uid), {
                username: firstName,
                email: email,
            });

            // Clear state and set success message
            setEmail("");
            setPassword("");
            setFirstName("");
            setSuccess("Sign up successful! Redirecting to login...");
            setError("");

            // Redirect to login page
            setTimeout(() => navigate("/login"), 2000);
        } catch (error) {
            // Handle errors
            setError(`Error: ${error.message}`);
            setSuccess("");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

                {success && <div className="text-green-500 mb-4">{success}</div>}
                {error && <div className="text-red-500 mb-4">{error}</div>}

                <div className="mb-4">
                    <label
                        htmlFor="firstName"
                        className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;