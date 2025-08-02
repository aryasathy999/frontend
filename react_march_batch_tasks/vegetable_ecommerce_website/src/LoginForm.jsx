import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

function LoginForm() {
    const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        const [error,setError]=useState('');
        const navigate=useNavigate();
        const handleSubmit = (e) => {
            e.preventDefault();
            const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$|^\d{10}$/;
            const passwordRegex = /^(?=.*[A-Z])(?=(?:.*[a-z]){3,})(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{9,}$/;
            const numberCount = (password.match(/\d/g) || []).length;
            if(!emailRegex.test(email)){
                setError('Invalid email');
            }
            else if(!passwordRegex.test(password) || numberCount < 4) {
                setError('Password must have 1 capital, 3 lowercase, 1 special character, and 4 digits');
            }
            else {
                setError('');
                navigate('/home'); //to redirect to home page if no errors found
            }
        }
    return(
        <div style={styles.container}>
            <div style={styles.formBox}>
                <h2 style={styles.title}>Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <label style={styles.label}>Email</label>
                    <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    style={styles.input} />
                    <label style={styles.label}>Password</label>
                    <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    style={styles.input} />
                    {error && <p style={styles.error}>{error}</p>}
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                <p style={styles.signupText}>
                    Not a member? <a href="#" style={styles.signupLink}>Signup now</a>
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#a020f0',
        height: '97vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formBox: {
        backgroundColor: '#fff',
        padding: '30px 40px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '300px'
    },
    title: {
        marginBottom: '20px'
    },
    label: {
        display: 'block',
        textAlign: 'left',
        margin: '10px 0 5px',
        fontSize: '14px'
    },
    input: {
        width: '100%',
        padding: '8px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    button: {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '25px',
        backgroundImage: 'linear-gradient(to right, red, orange, yellow)',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '16px'
    },
    signupText: {
        marginTop: '15px',
        fontSize: '14px'
    },
    signupLink: {
        color: '#00bcd4',
        textDecoration: 'none'
    },
    error: {
        color: 'red',
        fontSize: '13px',
        marginBottom: '10px'
    }
};

export default LoginForm;