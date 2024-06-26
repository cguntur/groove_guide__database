 const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#memberEmail').value.trim();
    const password = document.querySelector('#memberPassword').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/member/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the member page
        document.location.replace('/member');
      } else {
        alert(response.statusText);
      }
    }
  };

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const role_id = document.querySelector('#role_id').value.trim();
  // const logged_in = document.querySelector('#logged_in').value.trim();

  if (name && email && password) {
      const response = await fetch('/api/member/signup', {
          method: 'POST',
          body: JSON.stringify({ name, email, password, role_id }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/member');
      } else {
          alert(response.statusText);
      }
  }
};

document
  .querySelector('.formLogin')
  .addEventListener('submit', loginFormHandler);
document
  .querySelector('#signup')
  .addEventListener('submit', signupFormHandler);
