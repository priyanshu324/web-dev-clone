import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

// Simplified JWT decoding function (FOR DEMO ONLY)
const decodeJwt = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error("Error decoding JWT:", error);
        return null;
    }
};

const isTokenExpired = (token) => {
    if (!token) return true; // If there is no token so the user is not log in
    try {
        const decoded = decodeJwt(token); //decode the token
        if (!decoded || !decoded.exp) return true; // If not decoded or no expiration value so we consider it expired
        const currentTime = Math.floor(Date.now() / 1000); //Get the current time in seconds
        return decoded.exp < currentTime; // return if the expiration date is less than current time
    } catch (error) {
        console.error("Error decoding JWT:", error);
        return true; // If the token fail to decode we also consider it expired.
    }
};

const Progress = () => {
    const [user, setUser] = useState(null);
    const [progress, setProgress] = useState(0);
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser)
            if (!isTokenExpired(user.credential)) {
                setUser(user);
            }
            else {
                localStorage.removeItem('user'); // if token expired remove the user from localstorage.
            }
        }
    }, []);

    const handleGoogleSuccess = async (credentialResponse) => {
        const decoded = decodeJwt(credentialResponse.credential);
        setUser({ ...decoded, credential: credentialResponse.credential });
        localStorage.setItem('user', JSON.stringify({ ...decoded, credential: credentialResponse.credential }));
    };

    const handleGoogleError = () => {
        console.log('Login Failed');
        // Handle the error as you like
    };


    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-start w-96 '>
                <div className="md:w-1/4 flex justify-end">
                    {/* progress component */}
                    <div className="bg-white p-5 rounded-lg text-center w-52 shadow-md text-black">
                        <div className="text-base mb-2 text-gray-800">
                            {progress}% completed
                        </div>
                        <div className="bg-gray-100 rounded-md h-2 w-full mb-2 relative">
                            <div
                                className="bg-gray-300 h-full rounded-md absolute"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className="text-sm text-gray-500 mb-1">
                            Save your progress
                        </div>
                        {user ? (
                            <div className="flex items-center justify-center space-x-2">
                                <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
                                <div className="text-lg font-semibold">{user.name}</div>
                            </div>
                        ) : (
                            <GoogleOAuthProvider clientId={googleClientId}>
                                <button
                                    className="text-blue-500 cursor-pointer hover:underline"
                                >
                                    <GoogleLogin
                                        onSuccess={handleGoogleSuccess}
                                        onError={handleGoogleError}
                                    />
                                </button>
                            </GoogleOAuthProvider>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Progress;