async function newPostHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const response = await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed update content');
  }
}

document.querySelector('#newPost').addEventListener('submit', newPostHandler);