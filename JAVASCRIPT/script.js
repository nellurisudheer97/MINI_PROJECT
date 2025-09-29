
document.addEventListener("DOMContentLoaded", () => {

    const servicesBtn = document.getElementById('Servicesbtn');
    const servicesList = document.getElementById('servicesList');
    async function fetchServices() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            servicesList.innerHTML = '';
            data.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name} - ${user.company.bs}`;
                li.style.padding = "0.5rem 0"; 
                servicesList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching services:', error);
            servicesList.innerHTML = '<li>Failed to load services. Please try again later.</li>';
        }
    }
    servicesBtn.addEventListener('click', fetchServices);
});




