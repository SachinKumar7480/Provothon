const codeForm = document.getElementById('codeForm');
const codeInput = document.getElementById('codeInput');

codeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const code = codeInput.value;
  codeInput.value = '';

  // Display the loading spinner or message

  // Send code to the backend for processing and display the review report
  fetch('/submit', {
    method: 'POST',
    body: new URLSearchParams({
      code: code
    })
  })
    .then(response => response.text())
    .then(data => {
      document.getElementById('reviewReport').innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
