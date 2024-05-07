import React, { useState } from 'react';
import '../App.css';

function Example() {
  const [data, setData] = useState(null);

  function handleClick() {
    const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://177a-71-163-166-96.ngrok-free.app/api/publickey/rKZRJgCYtHpxUpv2wnSzrp5GMY3tehRCNU';

    fetch(corsProxyUrl + apiUrl, {
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
      setData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      {data ? <div>{JSON.stringify(data.username)}</div> : <div>Loading...</div>}
    </div>
  );
}

export default Example;
