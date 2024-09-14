import React from 'react'
import Navbar from './components/Navbar';
import Main from './pages/Main';
import './App.css'
import Footer from './components/Footer';
import PasswordLoginWithFirebase from './firebase/PasswordLoginWithFirebase';

const App = () => {
  return (
    <div className='overflow-x-hidden font-["Poppins"]'>
     {/* <Navbar />
     <Main />
     
     <Footer /> */}
     <PasswordLoginWithFirebase />
    </div>
  );
}

export default App