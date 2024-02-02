// document.getElementById('addTourPackageBtn').addEventListener('click', function () {
//     document.getElementById('addPackageFormContainer').style.display = 'block';
// });

// document.getElementById('cancelBtn').addEventListener('click', function () {
//     document.getElementById('addPackageFormContainer').style.display = 'none';
//     document.getElementById('packageForm').reset();
// });
document.getElementById('removeDayBtn').addEventListener('click', function () {
    const itineraryContainer = document.getElementById('itineraryContainer');
    const lastDay = itineraryContainer.lastElementChild;
    
    if (lastDay && lastDay.className === 'day') {
        itineraryContainer.removeChild(lastDay);
    }
});

document.getElementById('addPackageBtn').addEventListener('click', function () {
    document.getElementById('addPackageForm').style.display = 'block';
});
document.getElementById('cancelBtn').addEventListener('click',function(){
    document.getElementById("addPackageForm").style.display='none';
    document.getElementById('packageForm').reset();
})
document.getElementById('addDayBtn').addEventListener('click', function () {
    const itineraryContainer = document.getElementById('itineraryContainer');
    const dayNumber = itineraryContainer.querySelectorAll('.day').length + 1;

    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';

    const label = document.createElement('label');
    label.setAttribute('for', `day${dayNumber}`);
    label.textContent = `Day ${dayNumber}:`;

    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', `day${dayNumber}`);
    textarea.setAttribute('name', `day${dayNumber}`);
    textarea.className = 'itinerary';
    textarea.setAttribute('required', '');

    dayDiv.appendChild(label);
    dayDiv.appendChild(textarea);

    itineraryContainer.appendChild(dayDiv);
});

document.getElementById('packageForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    // For simplicity, we'll just log the data to the console
    const packageName = document.getElementById('packageName').value;
    const packageDescription = document.getElementById('packageDescription').value;
    const packagePrice = document.getElementById('packagePrice').value;

    const mainImageInput = document.getElementById('mainImage');
    const mainImage = mainImageInput.files[0];

    console.log('Package Name:', packageName);
    console.log('Description:', packageDescription);
    console.log('Price:', packagePrice);

        // Handle main header image
        if (mainImage) {
            console.log('Main Header Image:', mainImage.name);
            // Add logic to upload the main header image to the server or perform other actions
        }
    

    const itinerary = [];
    const itineraryTextareas = document.querySelectorAll('.itinerary');
    itineraryTextareas.forEach((textarea) => {
        itinerary.push(textarea.value);
    });

    console.log('Itinerary:', itinerary);

        // Handle additional images
        const additionalImagesInput = document.getElementById('additionalImages');
        const additionalImages = additionalImagesInput.files;

        if (additionalImages.length > 0) {
            console.log('Additional Images:');
            for (const file of additionalImages) {
                console.log(file.name);
                // Add logic to upload each additional image to the server or perform other actions
            }
        }

    // Add logic to send data to server or perform other actions as needed

    // Clear the form
    document.getElementById('packageForm').reset();

    // Hide the form after submission
    document.getElementById('addPackageForm').style.display = 'none';
});
