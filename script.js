// Array of image data
const images = [
    { src: 'landscape.jpg', hdSrc: 'landscape.jpg', caption: 'Image of beautiful scenic view which describe nature and serenity. it such  gives a positive vibes.' },
    { src: 'parrot.jpg', hdSrc: 'parrot.jpg', caption: 'An amazing mexican parrot is sit on a tree and enjoying the nature.He is looking very active and energetic.' },
    { src: 'AI.webp', hdSrc: 'AI.webp', caption: 'A allluring HD lights looking very amazing and represtning nice colour combinatiom'},
    { src: 'Flowers.jpg', hdSrc: 'Flowers.jpg', caption: 'Colourful flowers placed on table showing purity and happiness. people feel vibrance.' },
    { src: 'Mountains.webp', hdSrc: 'Mountains.webp', caption: 'Asunset view from mountainy area showing strenght and determination towards health.' },
    { src: 'tiger.jpg', hdSrc: 'tiger.jpg', caption: 'Lion is looking at the camera with confident and showing sharpnss.' },
    { src: 'Leaf.webp', hdSrc: 'Leaf.webp', caption: 'A bird is chirping in forest of diffrent species.' },
    { src: 'Girl.jpg', hdSrc: 'Girl.jpg', caption: 'A ferry in sea is playing with fishes.' },
    { src: 'Astro.jpg', hdSrc: 'Astro.jpg', caption: 'A solar planet is showing his family members as all stars are together.' },
    { src: 'Snow.jpg', hdSrc: 'Snow.jpg', caption: 'Represnting coldy mountainy view with happy ice vibes.' },
    { src: 'Water.jpg', hdSrc: 'Water.jpg', caption: 'A beautiful piece of art is represnting colours.' },
    { src: 'Ballon.jpg', hdSrc: 'Ballon.jpg', caption: 'A adventures view of parachutes.' }
];

// Select the gallery container and details section
const galleryContainer = document.getElementById('gallery');
const imageDetails = document.getElementById('imageDetails');
const hdImage = document.getElementById('hdImage');
const caption = document.getElementById('caption');

// Function to dynamically create gallery items
const createGallery = () => {
    images.forEach((image, index) => {
        // Create image element
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.caption;
        imgElement.classList.add('gallery-image');
        imgElement.dataset.hdSrc = image.hdSrc;
        imgElement.dataset.caption = image.caption;
        
        // Append image to the gallery container
        galleryContainer.appendChild(imgElement);
    });
};

// Function to show image details when an image is clicked
const showImageDetails = (event) => {
    // Make sure we clicked on an image
    if (event.target.tagName.toLowerCase() === 'img') {
        const clickedImage = event.target;
        
        // Update HD image and caption
        hdImage.src = clickedImage.dataset.hdSrc;
        caption.textContent = clickedImage.dataset.caption;
        
        // Show the image details container
        imageDetails.style.display = 'block';
    }
};

// Function to hide image details when the HD image is clicked
const hideImageDetails = () => {
    // Hide the details container
    imageDetails.style.display = 'none';
};

// Initialize gallery creation
createGallery();

// Event listener for gallery image clicks (event delegation)
galleryContainer.addEventListener('click', showImageDetails);

// Event listener for closing the image details
hdImage.addEventListener('click', hideImageDetails);
