import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './4-css/App.css';
import axios from 'axios';
import User_Account from './3-pages/User_Account';
import Navbar from './3-pages/components/Navbar';

function App() {

/*   const getTest = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/auth/gettest',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      );

      console.log(data)
    } catch (error) {
      console.log(error.response.data)
    }
  } */

  useEffect(() => {
    return () => {
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <div className='App-body'>
          <Route path='/mon-compte' component={User_Account} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
