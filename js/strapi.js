document.addEventListener('DOMContentLoaded', () => {
    // Debug: Verify DOMContentLoaded event
    console.log('DOMContentLoaded event triggered'); 
    // Add a short delay to ensure config.js is fully loaded
    setTimeout(fetchData, 100); 
});

function fetchData() {
    const url = window.config.baseURL; // Use the injected baseURL from config.js
    console.log('Using baseURL:', url); // Debugging

    fetch(url)
        .then(response => {
            // Debug: Log response status
            console.log('Response status:', response.status); 
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(json => {
            // Debug: Log the entire JSON response
            console.log('JSON data:', json);
            if (json.data && Array.isArray(json.data)) {
                // Access the `data` array directly
                populateButtons(json.data); 
            } else {
                console.error('Data format is incorrect:', json);
            }
        })
        .catch(error => {
            console.error('Fetch operation error:', error);
        });
}

function populateButtons(data) {
    // Debug: Log the data to be populated
    console.log('Data to populate:', data); 

    data.forEach((item, index) => {
        // Debug: Log each item being processed
        console.log('Processing item:', item); 
        if (item.attributes) {
            // Access the attributes of each project
            const project = item.attributes; 
            const buttonId = `project-${index + 1}`;
            const button = document.getElementById(buttonId);

            if (button) {
                button.querySelector('.button-text').textContent = project.project_name;
                button.onclick = () => {
                    window.location.href = project.link;
                };
                console.log(`Updated button ${index + 1} with project: ${project.project_name}`); // Debug: Verify button update
            } else {
                console.error(`Button with ID ${buttonId} not found`);
            }
        } else {
            console.error('Item format is incorrect:', item);
        }
    });
}