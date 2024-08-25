// // src/components/SignUp.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../redux/slices/authSlice';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const error = useSelector(state => state.auth.error);

//   const handleSignUp = () => {
//     dispatch(registerUser(email, password)).then((action) => {
//         if (!action.error) {
//           navigate('/login');
//         }
//       });
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleSignUp}>Sign Up</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const error = useSelector(state => state.auth.error);

  const handleSignUp = () => {
    dispatch(registerUser(email, password)).then((action) => {
      if (!action.error) {
        navigate('/login');
      }
    });
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'black',
    },
    form: {
      padding: '40px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
    },
    title: {
      marginBottom: '20px',
      fontSize: '2em',
      fontWeight: 'bold',
      textAlign: 'center',
      color:'black',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      marginBottom: '20px',
      fontSize: '1em',
    },
    button: {
      width: '100%',
      padding: '12px',
      borderRadius: '6px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      fontSize: '1em',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    error: {
      color: 'red',
      marginTop: '10px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.title}>Sign Up</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={styles.input}
        />
        <button
          onClick={handleSignUp}
          style={styles.button}
        >
          Sign Up
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
