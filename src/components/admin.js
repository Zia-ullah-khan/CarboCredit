import React, { useState, useEffect } from 'react';
import '../App.css';
const { Xumm } = require('xumm');

const xumm = new Xumm('Some API Key');

export const Admin = () => {
  const [account, setAccount] = useState('');
  const [admin, setAdmin] = useState('');
  const [showSidebar, setShowSidebar] = useState(false); // State to track sidebar visibility
  const [showForm, setShowForm] = useState(false); // State to track form visibility
  const [formType, setFormType] = useState(''); // State to track the type of form to show

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
        if (!data.AccountType){
          window.location.href = '/Sign_Up';
        }
        if (data.AccountType !== 'Admin'){
            window.location.href = '/';
          }
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

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); // Toggle sidebar visibility
  };

  const openForm = (type) => {
    setFormType(type);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };
  const handleSubmit = (event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    const form = document.querySelector('.form-container form');
    const formData = new FormData(form);
  
    // Convert FormData to a plain object
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
  
    if (formDataObject.hasOwnProperty('projectName') && formDataObject.projectName !== '') {
    const apiUrl = `https://generally-loving-bluegill.ngrok-free.app/api/add_project/` + formDataObject;
  
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
            if (!data.AccountType){
              window.location.href = '/Sign_Up';
            }
            if (data.AccountType !== 'Admin'){
                window.location.href = '/';
              }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      } 
      if (formDataObject.hasOwnProperty('projectId') && formDataObject.projectId !== '') {
        const apiUrl = `https://generally-loving-bluegill.ngrok-free.app/api/remove_project/` + formDataObject.projectId;
  
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
            if (!data.AccountType){
              window.location.href = '/Sign_Up';
            }
            if (data.AccountType !== 'Admin'){
                window.location.href = '/';
              }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
      if (formDataObject.hasOwnProperty('transactionId') && formDataObject.transactionId !== '') {
        addproject(formDataObject)
      }
  };
  
  const addproject = (data)=>{
    console.log(data)
  }
  return (
    <div className="hero">
      <div className="content">
        <h1>Welcome to the admin panel</h1>
        <button type="button" onClick={() => openForm('addProject')} className='Nav_button' style={{color: 'white' }}>Add a Project</button>
        <br></br>
        <br></br>
        <button type="button" onClick={() => openForm('removeProject')} className='Nav_button' style={{color: 'white' }}>Remove a Project</button>
        <br></br>
        <br></br>
        <button type="button" onClick={() => openForm('completeTransaction')} className='Nav_button' style={{color: 'white' }}>Complete a Transaction</button>
        <br></br>
        <br></br>
        <div className="sidebar" style={{ display: showSidebar ? 'block' : 'none', color: 'white' }}>
          <button type="button" onClick={login} className='Nav_button' style={{color: 'white' }}>Sign In</button>
          <br />
          <br />
        </div>
        {showForm && (
          <Form type={formType} onSubmit={handleSubmit} onCancel={closeForm} />
        )}
      </div>
    </div>
  );
};

const Form = ({ type, onSubmit, onCancel }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      onSubmit(formData);
    };
  
    return (
      <div className="form-container">
        <div className="form-wrapper">
          <h2>{type === 'addProject' ? 'Add a Project' : type === 'removeProject' ? 'Remove a Project' : 'Complete a Transaction'}</h2>
          <br></br>
          <form onSubmit={(event) => handleSubmit(event)}>
            {type === 'addProject' && (
              <>
                <label>Project Name</label>
                <input type="text" name="projectName" />
                <br></br>
                <label>location</label>
                <input type="text" name="location" />
                <br></br>
                <label>CC</label>
                <input type="text" name="CC" />
                <br></br>
                <label>owner</label>
                <input type="text" name="owner" />
                <br></br>
                <label>publickey</label>
                <input type="text" name="publickey" />
              </>
            )}
            {type === 'removeProject' && (
              <>
                <label>Project ID</label>
                <input type="text" name="projectId" />
              </>
            )}
            {type === 'completeTransaction' && (
              <>
                <label>Transaction ID</label>
                <input type="text" name="transactionId" />
              </>
            )}
            <br></br>
            <button type="submit">Submit</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </form>
        </div>
      </div>
    );
  };
  
