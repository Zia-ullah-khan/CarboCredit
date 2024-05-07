import React, { useState, useEffect } from 'react';
import { Xumm } from 'xumm';
import '../App.css';

const xumm = new Xumm('1e9144b6-adcf-45ac-bc96-930311f872eb');

const Purchase = () => {
  const [destination, setDestination] = useState('');
  const [destinationTag, setDestinationTag] = useState('');
  const [carbonOffset, setCarbonOffset] = useState(0);
  const [qr, setQr] = useState('');
  const [project, setProject] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [Account, setAccount] = useState('');

  useEffect(() => {
    const fetchProjectData = async () => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const projectParam = urlParams.get('project');
            if (projectParam) {
                setProject(projectParam);
                console.log(projectParam);
                const apiUrl = `https://generally-loving-bluegill.ngrok-free.app/api/project/${projectParam}`;
                const response = await fetch(apiUrl, {
                    mode: "cors",
                    headers: {
                        'ngrok-skip-browser-warning': '69420'
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                const data = await response.json();
                setPublicKey(data.publickey);
            }
        } catch (error) {
            console.error('Error fetching project data:', error);
        }
    };

    fetchProjectData();
}, [publicKey]);
const fetchProjectData_user = async (csss) => {
  try {
      console.log(publicKey);
      const apiUrl = `https://generally-loving-bluegill.ngrok-free.app/api/Update_user_CC/${publicKey}/${csss}`;
      const response = await fetch(apiUrl, {
          mode: "cors",
          headers: {
              'ngrok-skip-browser-warning': '69420'
          }
      });

      if (!response.ok) {
          throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      return data; // Return the fetched data
  } catch (error) {
      console.error('Error fetching project data:', error);
      throw error; // Re-throw the error so that the caller can handle it
  }
};
const fetchProjectData_project = async (csss) => {
  try {
      console.log(publicKey);
      const apiUrl = `https://generally-loving-bluegill.ngrok-free.app/api/Update_project_CC/${publicKey}/${csss}`;
      const response = await fetch(apiUrl, {
          mode: "cors",
          headers: {
              'ngrok-skip-browser-warning': '69420'
          }
      });

      if (!response.ok) {
          throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      return data; // Return the fetched data
  } catch (error) {
      console.error('Error fetching project data:', error);
      throw error; // Re-throw the error so that the caller can handle it
  }
};

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDestinationTagChange = (event) => {
    setDestinationTag(event.target.value);
  };

  const handleCarbonOffsetChange = (event) => {
    setCarbonOffset(parseInt(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = await xumm.payload.createAndSubscribe({
        TransactionType: 'Payment',
        Destination: publicKey,
        DestinationTag: '0',
        Amount: String(carbonOffset*1000000),
      });
      fetchProjectData_user(carbonOffset);
      fetchProjectData_project(Account);
      setQr(payload.created.refs.qr_png);
    } catch (error) {
      console.error('Error creating payload:', error);
      // Display error to the user
    }
  };
  useEffect(()=>{
    xumm.user.account.then(account => {
      setAccount(account)
      console.log(Account)
    });
  })

  return (
    <div className="center-container">
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          {project && (
            <>
              <p id="title">Purchasing from {project}</p>
              <br />
            </>
          )}
          {!project && (
            <>
              <label>Destination:</label>
              <br />
              <input type="text" value={destination} onChange={handleDestinationChange} />
              <br />
              <label>Destination Tag:</label>
              <br />
              <input type="text" value={destinationTag} onChange={handleDestinationTagChange} />
            </>
          )}
          <br />
          <label>Carbon offset (in metric tons):</label>
          <br />
          <input type="text" value={carbonOffset} onChange={handleCarbonOffsetChange} />
          <br />
          <br />
          <button type="submit">Purchase</button>
          {qr && (
            <>
              <img id="qrCode" src={qr} alt="QR Code" />
              <p id="title">Please scan the QR code to continue</p>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Purchase;
