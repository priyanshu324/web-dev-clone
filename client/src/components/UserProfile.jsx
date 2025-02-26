import React from 'react';
import PropTypes from 'prop-types';
import '../styles/User.css'; // Correct path to the CSS file

// UserProfile Component
const UserProfile = ({ user, onLogout }) => {
    return (
        // Main container for the user profile
        <div className="user-profile">
            {/* User avatar image */}
            <img
                src={user.picture || 'https://via.placeholder.com/150'}
                alt="User Avatar"
                className="user-avatar"
            />
            {/* User name */}
            <h2 className="user-name">
                {user.name || 'No Name Provided'}
            </h2>
            {/* User email */}
            <p className="user-email">
                {user.email || 'No Email Provided'}
            </p>
            {/* Logout button */}
            <button onClick={onLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
};

// PropTypes for type-checking and documentation
UserProfile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        picture: PropTypes.string,
    }).isRequired,
    onLogout: PropTypes.func.isRequired,
};

export default UserProfile;