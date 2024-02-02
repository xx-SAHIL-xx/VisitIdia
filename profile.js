// Load user data onto the profile page
// document.getElementById('email').textContent = userData.email;
// document.getElementById('username').textContent = userData.username;
// document.getElementById('fullName').textContent = userData.fullName;
// Populate more user details as needed

// Simulate a fetch operation (replace this with an actual API call)
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
        // Assuming you have the JSON file in the same directory as your HTML
//         fetch('mockData.json')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }

function fetchUserData() {
    return fetch('mockData.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            throw error; // Rethrow the error to propagate it further
        });
}

// Populate user data on the profile page
function populateUserProfile(user) {
    document.getElementById('email').textContent = user.email;
    document.getElementById('username').textContent = user.username;
    document.getElementById('password').textContent = user.password;
    // Populate more user details as needed
}

// Fetch user data and populate the profile
fetchUserData()
    .then(user => {
        populateUserProfile(user);
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
