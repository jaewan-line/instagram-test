import React from 'react';
import FacebookLoginComponent from '../components/facebook_login'; // Adjust the path as per your project structure

const LoginPage: React.FC = () => {
  // You can add additional state and handlers here if needed
  // For example, handling the state post successful login

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <h2>Login with Facebook</h2>
        <FacebookLoginComponent />
        {/* You can add more login methods or content here */}
      </div>
    </div>
  );
};

export default LoginPage;