document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const contact = document.getElementById('contact').value;
    const role = document.getElementById('role').value;
    const formData = new FormData();
  
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('contact', contact);
    formData.append('role', role);
  
    if (role === 'job-seeker') {
      const resume = document.getElementById('resume').files[0];
      formData.append('resume', resume);
    } else if (role === 'employer') {
      const companyName = document.getElementById('company-name').value;
      const companyDetails = document.getElementById('company-details').value;
      formData.append('companyName', companyName);
      formData.append('companyDetails', companyDetails);
    }
  
    try {
      const response = await fetch('http://localhost:8000/api/user/register', {
        method: 'POST',
        body: formData
      });
  
      const data = await response.json();
  
      if (data.token) {
        alert('Registration successful');
        window.location.href = 'login.html';
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again later.');
    }
  });
  