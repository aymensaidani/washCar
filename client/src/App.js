import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { io } from "socket.io-client";

// ... (import statements)

function App() {
  const [token, setToken] = useState('');
  const [clientId, setClientId] = useState('');
  const [username,setUsername] =useState('')
  const [role,setRole] =useState('')
///////
const [socket,setSocket]= useState(null)
useEffect(() => {
  const socket = io("http://localhost:5000", { transports: ["websocket"] });
  setSocket(socket);
}, []);



//////

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    const storedClientId = sessionStorage.getItem('clientId');
const storedUsername = sessionStorage.getItem('username')
const storedRole = sessionStorage.getItem('role');

    if (storedToken && storedClientId && storedUsername && storedRole) {
      setToken(storedToken);
      setClientId(storedClientId);
      setUsername(storedUsername)
      setRole(storedRole)
    }
    console.log("stored token", storedToken);
    console.log("storedClientId", storedClientId);


  }, []);

  const handleLogin = (newToken, newClientId , newUsername, newRole) => {
    setToken(newToken);
    setClientId(newClientId);
    setUsername(newUsername)
    setRole(newRole)

    sessionStorage.setItem('token', newToken);
    sessionStorage.setItem('clientId', newClientId);
    sessionStorage.setItem('username', newUsername);
    sessionStorage.setItem('role', newRole);


  };

  const handleLogout = ()=>{
    setToken('')
    setClientId('')
    setUsername('')
    setRole('')
    sessionStorage.removeItem('clientId')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')


    toast.success('Successfully logged out');
  }



 
  console.log("'clientId in app :",clientId);
  console.log("username app : ",username);
  console.log("role app : ",role);


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar socket={socket} role={role} username={username}  clientId={clientId} handleLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home socket={socket} username={username} clientId={clientId} role={role}  />} />
            <Route path="/about" element={<About clientId={clientId} socket={socket} />} />
            <Route path="/contact" element={<Contact clientId={clientId} socket={socket} />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;


