async function userLogin(event) {
  event.preventDefault();
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
console.log(response);
    if (response.ok) {

      const rest = await response.json();
      console.log(rest);
      document.location.replace(`/dashboard/${rest.user_id}`);
  } else {
    alert(response.statusText);
    console.log('error in JS file');
    }
  }
}

document.querySelector('#login').addEventListener('click', userLogin);

