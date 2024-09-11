const { response } = require("express");

document.addEventListener('DOMContentLoaded', () => {
  const cadastrarBtn = document.getElementById('cadastrar');
  cadastrarBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const position = document.getElementById('position').value;
    const department = document.getElementById('department').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    fetch('/funcionarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, lastName, position, department, email, phoneNumber})
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