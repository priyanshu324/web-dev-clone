import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { loginWithFacebook, fetchUserInfo } from '../hooks/authServices';
import UserProfile from './UserProfile';
import '../styles/Social.css';

// SocialLoginButtons Component
const SocialLoginButtons = () => {
    // State to hold user information
    const [user, setUser] = useState(null);

    // Handle Google login
    const handleGoogleLogin = async (response) => {
        try {
            // Fetch user info with google response
            const userInfo = await fetchUserInfo('google', response.credential);
            // Set user info in state
            setUser(userInfo);
        } catch (error) {
            // Log errors
            console.error('Google login failed:', error);
        }
    };
    // Handle Facebook login
    const handleFacebookLogin = async () => {
        try {
            // Fetch user info with facebook response
            const fbResponse = await loginWithFacebook();
            const userInfo = await fetchUserInfo('facebook', fbResponse.accessToken);
            // Set user info in state
            setUser(userInfo);
        } catch (error) {
            // Log errors
            console.error('Facebook login failed:', error);
        }
    };

    // Handle LinkedIn login
    const handleLinkedInLogin = () => {
        // LinkedIn Auth link to redirect the user to the login page
        const linkedInAuthUrl = providersConfig.linkedin.authUrl;
        window.location.href = linkedInAuthUrl;
    };

    // Handle GitHub login
    const handleGitHubLogin = () => {
        // GitHub Auth link to redirect the user to the login page
        const gitHubAuthUrl = providersConfig.github.authUrl;
        window.location.href = gitHubAuthUrl;
    };
    // Function to log out user
    const handleLogout = () => {
        setUser(null);
    };

    return (
        // Container for social login buttons
        <div className="container">
            {/* Conditional rendering of buttons or user profile */}
            {!user ? (
                // If no user is logged in display the social login buttons
                <>
                    {/* Google Login Button */}
                    <GoogleLogin
                        onSuccess={handleGoogleLogin}
                        onError={() => console.error('Google login failed')}
                        render={(renderProps) => (
                            <button className="google-button login-button" onClick={renderProps.onClick}>
                                <FontAwesomeIcon icon={faGoogle} className="icon" /> Login with Google
                            </button>
                        )}
                    />
                    {/* Facebook Login Button */}
                    <button className="facebook-button login-button" onClick={handleFacebookLogin}>
                        <FontAwesomeIcon icon={faFacebook} className="icon" /> Login with Facebook
                    </button>
                    {/* LinkedIn Login Button */}
                    <button className="linkedin-button login-button" onClick={handleLinkedInLogin}>
                        <FontAwesomeIcon icon={faLinkedin} className="icon" /> Login with LinkedIn
                    </button>
                    {/* GitHub Login Button */}
                    <button className="github-button login-button" onClick={handleGitHubLogin}>
                        <FontAwesomeIcon icon={faGithub} className="icon" /> Login with GitHub
                    </button>
                </>
            ) : (
                // If user is logged in display the user profile
                <UserProfile user={user} onLogout={handleLogout} />
            )}
        </div>
    );
};

export default SocialLoginButtons;