import { useGoogleLogin } from '@react-oauth/google';
import './CustomButton.css';

function CustomButton () {
    const login = useGoogleLogin({
        onSuccess: response => console.log('OK: ', response),
        flow: 'implicit',
    });

    return (
        <div className="customLoginDiv">
            <button className="customLogin" onClick={login}>My Login</button>
        </div>
    )
}

export default CustomButton;