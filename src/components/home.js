import React, { useState, useEffect } from 'react';
import '../App.css';
const { Xumm } = require('xumm');

const xumm = new Xumm('1e9144b6-adcf-45ac-bc96-930311f872eb'); // Some API Key

export const Home = () => {
  const [account, setAccount] = useState('');
  const [admin, setAdmin] = useState('');
  const [showSidebar, setShowSidebar] = useState(false); // State to track sidebar visibility

  const handleClick = (publickey) => {
    console.log("account is" + publickey)
    const apiUrl = `https://generally-loving-bluegill.ngrok-free.app/api/publickey/` + publickey;
  
    fetch(apiUrl, {
      mode: "cors",
      headers: {
        'ngrok-skip-browser-warning': '69420'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        setAccount(data.username); // Update account state with the public key
        setAdmin(data.AccountType);
        console.log(data.AccountType);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  useEffect(() => {
    console.log(account); // Log updated account state when it changes
    console.log(admin);
  }, [account, admin]);
  

  useEffect(() => {
    // Fetch account and app name when the component mounts
    xumm.user.account.then(a => {
      handleClick(a); // Call handleClick with the retrieved account
    });
  }, []);

  const login = () => {
    xumm.authorize();
  };

  const handletourClick = () => {
    // Redirect to the '/contact' route
    window.location.href = '/contact';
  };
  const yay = () => {
    // Redirect to the '/contact' route
    window.location.href = '/Sign_Up';
  };  
  const projects = () => {
    // Redirect to the '/contact' route
    window.location.href = '/projects';
  };
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); // Toggle sidebar visibility
  };
  const openAdminPanel = ()=>{
    window.location.href = '/admin'
  }

  return (
    <div className="hero">
      <div className="navbar">
        <img src="/Images/logo.png" className="logo" alt="logo" />
        
      </div>
      <div className="content">
        <h3>Welcome {account ? account : 'Guest'} to </h3> <h1>CarboCredit<br /></h1>

        <h3>Powering Climate Action on the XRPL Blockchain</h3><br></br>
        <button type="button" onClick={handletourClick} style={{color: 'white' }}>Take a tour</button>
      </div>
      <div className="sidebar" style={{ display: showSidebar ? 'block' : 'none', color: 'white' }}>
      <button type="button" onClick={yay} className='Nav_button' style={{color: 'white' }}>Sign up</button>
      <br></br>
      <br></br>
        <button type="button" onClick={login} className='Nav_button' style={{color: 'white' }}>Sign In</button>
        <br></br>
      <br></br>
        <button type="button" onClick={projects} className='Nav_button' style={{color: 'white' }}> Projects</button>
        <br></br>
        <br></br>
        {admin && admin === 'Admin' && (
        <button type="button" onClick={openAdminPanel} className='Nav_button' style={{ color: 'white' }}>Admin Panel</button>
      )}
      </div>
      <div className="bubbles">
        <img src="/Images/bubble.png" alt="Bubblea"/>
        <img src="/Images/bubble.png" alt="Bubblea"/>
        <img src="/Images/bubble.png" alt="Bubblea"/>
        <img src="/Images/bubble.png" alt="Bubblea"/>
        <img src="/Images/bubble.png" alt="Bubblea"/>
        <img src="/Images/bubble.png" alt="Bubblea"/>
        <img src="/Images/bubble.png" alt="Bubblea"/>
      </div>
      <img src="/Images/menu.png" className="menu" alt="menu" onClick={toggleSidebar} style={{ position: 'absolute', top: 0, right:30 }} />

    </div>
  );
};
