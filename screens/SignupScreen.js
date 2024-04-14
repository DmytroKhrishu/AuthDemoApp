import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true)
    const response = await createUser(email, password);
    setIsAuthenticating(false);
  }

  if(isAuthenticating) {
    return <LoadingOverlay />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
