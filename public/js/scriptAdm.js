const { response } = require("express");

document.addEventListener('DOMContentLoaded', () => {
  const cadastrarBtn = document.getElementById('cadastrar');
  cadastrarBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const user = document.getElementById('usuario').value;
    const password = document.getElementById('senha').value;

    fetch('/adms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user, password})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
    })
    .catch(error => {
      console.error(error);
    })
  });
});