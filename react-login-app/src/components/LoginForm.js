import React, {
    useState,
    useEffect
} from 'react';
import Input from './input';
import Button from './Button';
import authService from '../authService'; // Make sure the route is correct

const LoginForm = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        useEffect(() => {
            // Here you can perform actions after component assembly, if necessary
            console.log(' mounted Component');
            // For example, you could do an initial data upload
        }, []);

        const handleLogin = async () => {
            try {
                setLoading(true);
                setError(null);

                // Call the authentication service
                await authService.signInWithEmailAndPassword(email, password);

                // If the login is successful, you could redirect to another page or perform other actions
                console.log('Inicio de sesión exitoso');
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const handleGoogleLogin = async () => {
            try {
                setLoading(true);
                setError(null);

                await authService.signInWithGoogle();

                // Here you could redirect or perform specific actions after login
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const handleFacebookLogin = async () => {
            try {
                setLoading(true);
                setError(null);

                await authService.signInWithFacebook();

                // Here you could redirect or perform specific actions after login
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const handleGitHubLogin = async () => {
            try {
                setLoading(true);
                setError(null);

                await authService.signInWithGitHub();

                // Here you could redirect or perform specific actions after login
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        return ( 
        <div>
         <h2>Login</h2>
         <Input type = "email" placeholder = "Enter your email" onChange = {(e) => setEmail(e.target.value)}/>
         <Input type = "password" placeholder = "Enter your password" onChange = {(e) => setPassword(e.target.value)}/>
         <Button onClick = {handleLogin} disabled = {loading}>{loading ? 'Logging In...' : 'Login'}
         </Button>
         <Button onClick = {handleGoogleLogin} disabled = {loading}>{loading ? 'Logging In...' : 'Login with Google'}
         </Button>
         <Button onClick = {handleFacebookLogin}disabled = {loading}>{loading ? 'Logging In...' : 'Login with Facebook'}
         </Button>
         <Button onClick = {handleGitHubLogin} disabled = {loading}>{loading ? 'Logging In...' : 'Login with GitHub'}
         </Button> 
         {error && <p style = {{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default LoginForm;
