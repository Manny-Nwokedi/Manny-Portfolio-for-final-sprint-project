// Get the LinkedIn and GitHub links by their IDs
const linkedinLink = document.getElementById('linkedin');
const githubLink = document.getElementById('github');

// Change the link color to red on mouseover
linkedinLink.addEventListener('mouseover', function() {
  linkedinLink.style.color = 'red';
});

githubLink.addEventListener('mouseover', function() {
  githubLink.style.color = 'red';
});

// Reset the link color to white on mouseout (when the mouse moves away)
linkedinLink.addEventListener('mouseout', function() {
  linkedinLink.style.color = 'white';
});

githubLink.addEventListener('mouseout', function() {
  githubLink.style.color = 'white';
});