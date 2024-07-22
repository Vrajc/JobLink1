document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const jobTitle = document.getElementById('job-title').value;
    const location = document.getElementById('location').value;

    const response = await fetch('http://localhost:8000/api/jobs?title=' + jobTitle + '&location=' + location);
    const jobs = await response.json();

    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = '';
    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job';
        jobElement.innerHTML = `<h3>${job.title}</h3><p>${job.company}</p><p>${job.location}</p>`;
        jobListings.appendChild(jobElement);
    });
});
