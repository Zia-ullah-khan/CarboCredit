const fetch = require('node-fetch');

function getuserid(username) {
  fetch('https://8d46-71-163-166-96.ngrok-free.app/api/userids/' + username)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Process the JSON data
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

module.exports = { getuserid };
