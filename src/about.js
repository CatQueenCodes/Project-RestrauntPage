

function loadAbout() {
    const contentContainer = document.querySelector('#contContainer');
    const photo = document.createElement('img');
    photo.src = '/src/cat.jpg';
    contentContainer.textContent = 'Please excuse any cat hair in your food and this basic design. This is my first go at webpack, and I did not spend much time on css';
    contentContainer.appendChild(photo);
    console.log('About.js is linked');
}

export {loadAbout}