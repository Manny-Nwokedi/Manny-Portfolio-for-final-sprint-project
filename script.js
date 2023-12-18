/* script to run when the page is loaded */
let imageIndex = 0;
const images = [
  'Images copy folder/01.jpg',
  'Images copy folder/02.jpg',
  'Images copy folder/03.jpg',
  'Images copy folder/04.jpg'
  // Add more image paths as needed
];

const imageTexts = [
  'Computer Components Project',
  'QAP1 Project about Frogs Page 02',
  'History Website Project',
  'QAP1 Project about Frogs Page 01'
  // Add corresponding texts for each image
];

function changeImage() {
  const imgElement = document.querySelector('.slideshow');
  const textElement = document.querySelector('.image-text');

  imgElement.src = images[imageIndex];
  textElement.textContent = imageTexts[imageIndex];

  imageIndex = (imageIndex + 1) % images.length;
  setTimeout(changeImage, 4000); // Change image every 4 seconds (4000 milliseconds)
}

window.onload = function() {
  changeImage();
};