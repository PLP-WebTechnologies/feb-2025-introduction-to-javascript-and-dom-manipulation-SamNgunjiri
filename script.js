// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.querySelector('#intro p').textContent = 'The text content has been changed! JavaScript is awesome!';
});

// Modify CSS styles via JavaScript
document.getElementById('changeStyleButton').addEventListener('click', function() {
    document.body.style.backgroundColor = '#cce7ff'; // Change background color
    document.querySelector('header h1').style.color = '#ff6347'; // Change header text color
});

// Add a new element when the button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a dynamically added paragraph!';
    document.getElementById('newElementContainer').appendChild(newElement);
});

// Remove the last added element when the button is clicked
document.getElementById('removeElementButton').addEventListener('click', function() {
    const container = document.getElementById('newElementContainer');
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
});
