async function newPostHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      const {
        message
      } = await response.json();
      showAlert({
        target: 'login-alert',
        message,
        type: 'danger'
      });
    }
  }
};

document.querySelector('#login').addEventListener('click', newPostHandler);