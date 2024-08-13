document.addEventListener('DOMContentLoaded', () => {
    // Debug: Verify DOMContentLoaded event
    console.log('DOMContentLoaded event triggered'); 
    fetchData();
});

function fetchData() {
    // Reverse proxied Strapi server on VPS
    const url = 'https://strapi.dbdoan.xyz/api/projects';

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
            const button = document.querySelector(`#${buttonId}`);

            if (button) {
                button.querySelector('.button-text').textContent = project.project_name;
                button.onclick = () => {
                    const newWindow = window.open(project.link, '_blank', 'noopener,noreferrer');
                    if (newWindow) {
                        newWindow.opener = null;
                    }
                };
                console.log(`Updated button ${index + 1} with project: ${project.project_name}`);
            } else {
                console.error(`Button with ID ${buttonId} not found`);
            }
        } else {
            console.error('Item format is incorrect:', item);
        }
    });
}
