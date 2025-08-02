import React from 'react';
import UserLogin  from './UserLogin';

function App() {
  const {isLoggedIn, login, logout} = UserLogin();

  return (
    <div className='text-center mt-5'>
      {isLoggedIn ? (
        <button style={{backgroundColor: 'green',color: 'white',padding: '10px 20px',border: 'none'}}>

        </button>
      ) : (
        <button onClick={login} style={{backgroundColor: 'gray', color: 'white', padding: '10px 20px', border: 'none'}}>Login</button>
      )}
      {isLoggedIn && (
        <div style={{marginTop: '20px'}}>
          <button onClick={logout} style={{backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none'}}>
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default App
