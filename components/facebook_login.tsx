import React from 'react';
import FacebookLogin from 'react-facebook-login';

interface FacebookLoginProps {
  // Define any props as needed, for example, a callback to update user state in your app
}

const FacebookLoginComponent: React.FC<FacebookLoginProps> = (props) => {
  const responseFacebook = (response: any) => {
    console.log('Facebook response:', response);
    // Handle the response. This typically involves sending the response to your backend for verification and user session management
  };

  return (
    <FacebookLogin
      appId="402239072259325" // Replace with your Facebook App ID
      autoLoad={true}
      fields="name,email,picture"
      onClick={() => console.log("Facebook login button clicked")}
      callback={responseFacebook}
      // Optionally add styling or custom button here
    />
  );
};

export default FacebookLoginComponent;