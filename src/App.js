import React, { useEffect } from 'react';
import Routes from './routes/routes';
import ApiCall from './ApiCalls/ApiCall';

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      ApiCall.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

    return (
      <Routes />
    );
}

export default App;
