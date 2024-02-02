document.addEventListener("DOMContentLoaded", function () {
  // Function to show the login and signup container
  function showLoginSignup() {
    const container = document.getElementById("container");
    container.style.display = "block"; // Show the container
  }

  // Set a timeout to call the function after 5 seconds
  setTimeout(showLoginSignup, 5000); // 5000 milliseconds = 5 seconds

  // Rest of your JavaScript code for handling login/signup toggling
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () =>
    container.classList.add("right-panel-active")
  );

  signInButton.addEventListener("click", () =>
    container.classList.remove("right-panel-active")
  );
});

// Add this script to your page
document.getElementById("signUp").addEventListener("click", function () {
  document.getElementById("container").classList.add("right-panel-active");
});

document.getElementById("signIn").addEventListener("click", function () {
  document.getElementById("container").classList.remove("right-panel-active");
});


// Function to handle login
function handleLogin() {
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;


  // Fetch user data from mockdata.json
  fetch('mockData.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      // Simulate a login check by searching for the user in the fetched data
      const user = users.find(u => u.username === usernameInput && u.password === passwordInput);
      // const user = users.find(u => u.username === userInput && u.password === passwordInput);

      if (user) {
        // Successful login
        alert(`Welcome, ${usernameInput}!`);
        window.location.href = "profile.html";
        // You may redirect the user to another page or perform other actions
      } else {
        // Failed login
        alert('Invalid username or password. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
}

// Attach the handleLogin function to the login button
document.getElementById('loginButton').addEventListener('click', handleLogin);






function handleSignup() {
  const email = document.getElementById("signupEmail").value;
  const username = document.getElementById("signupUsername").value;
  const phone = document.getElementById("signupPhone").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById(
    "signupConfirmPassword"
  ).value;
  // Regular expression for a simple phone number pattern (10 digits)
  const phoneRegex = /^\d{10}$/;

  // Basic validation (you can add more validation as needed)

  //Check if the phone number matches the pattern
  if (phoneRegex.test(phone)) {
    // Phone number is valid
    displayMessage("Phone number is valid");
  } else {
    // Phone number is not valid
    displayMessage("Enter valid phone number (10 Digits)");
  }

  if (!email || !username || !phone || !password || !confirmPassword) {
    displayMessage("Please fill in all fields.");
    return;
  }
  
  if(!/[a-zA-Z]/.test(username)){
    displayMessage("Username should contain only letter")
  }
  if(password.length<8){
    displayMessage("Password must be at least 8 characters long.")
  }
    // Check if the password contains both letters and numbers
    if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
      displayMessage("Password must contain both letters and numbers.")
  }

  if (password !== confirmPassword) {
    displayMessage("Passwords do not match.");
    return;
  }

  // MOCK DATA

  // Load the JSON file containing mock user data
  fetch("mockData.json")
    .then((response) => response.json())
    .then((users) => {
      // Check if the username or email already exists
      const userExists = users.some(
        (user) => user.username === username || user.email === email
      );

      if (userExists) {
        displayMessage("Username or email is already in use.");
      } else {
        // Add the new user to the JSON file (simulating server-side data modification)
        const newUser = { email, username, password };
        users.push(newUser);

        // Save the updated data back to the JSON file (simulating server-side data storage)
        // Note: In a real application, you would send this data to the server to handle
        // backend storage and modifications.
        const updatedData = JSON.stringify(users, null, 2);
        const blob = new Blob([updatedData], { type: "application/json" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "mockData.json";
        link.click();

        displayMessage(`Account created for ${username}`);
        // Redirect or perform other actions as needed after successful signup
        // Redirect to the home page after successful signup
        window.location.href = "profile.html"; // Replace 'home.html' with your actual home page URL
      }
    })
    .catch((error) => {
      console.error("Error loading JSON file:", error);
      displayMessage("Signup failed. Please try again.");
    });
}

// function displayMessage(msg) {
// const messageElement = document.getElementById('message');
// messageElement.textContent = msg;
// }

function displayMessage(msg) {
  const messageElement = document.getElementById("message");

  // Check if the element exists before setting its text content
  if (messageElement) {
    messageElement.textContent = msg;
  } else {
    console.error('Element with id "message" not found.');
  }
}
