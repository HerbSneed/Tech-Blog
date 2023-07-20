async function userComment(event) {
  event.preventDefault();
  // const username = document.querySelector('#username').value.trim();
  const description = document.querySelector('#comment').value.trim();

  if (description) {
    const response = await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify({
        description,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    console.log('>>>>response>>>>>' + response);

    if (response.ok) {
      const data = await response.text();
      const dataJSON = JSON.parse(data);
      console.log('>>>>>', dataJSON)
      document.location.replace(`/dashboard/${dataJSON.user_id}`);

      const rest = await response.json();
      document.location.replace(`/single-post/${rest.user_id}`);
    } else {
      alert(response.statusText);
      console.log('error in JS file');
    }
  }
}

document.querySelector('#newCommmentSubmit').addEventListener('click', userComment);
