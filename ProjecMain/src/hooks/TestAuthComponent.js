import React from 'react';

import useAuth from './useAuth'; // підключи хук

function TestAuthComponent() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h1>User is {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default TestAuthComponent;
