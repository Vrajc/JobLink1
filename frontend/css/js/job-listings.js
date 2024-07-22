document.addEventListener('DOMContentLoaded', () => {
  fetchJobListings();
});

async function fetchJobListings() {
  try {
    const response = await fetch('http://localhost:8000/api/jobs'); 
    const data = await response.json();

    const jobListingsContainer = document.getElementById('job-listings');

    data.forEach(job => {
      const jobListing = document.createElement('div');
      jobListing.classList.add('job-listing');

      const title = document.createElement('div');
      title.classList.add('job-title');
      title.textContent = job.title;
      jobListing.appendChild(title);

      const companyName = document.createElement('div');
      companyName.classList.add('company-name');
      companyName.textContent = job.companyName;
      jobListing.appendChild(companyName);

      const location = document.createElement('div');
      location.classList.add('job-location');
      location.textContent = job.location;
      jobListing.appendChild(location);

      const description = document.createElement('div');
      description.classList.add('job-description');
      description.textContent = job.description;
      jobListing.appendChild(description);

      const applyButton = document.createElement('button');
      applyButton.classList.add('apply-button');
      applyButton.textContent = 'Apply Now';
      jobListing.appendChild(applyButton);

      jobListingsContainer.appendChild(jobListing);
    });

  } catch (error) {
    console.error('Error fetching job listings:', error);
  }
}
