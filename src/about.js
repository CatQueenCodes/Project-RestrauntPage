

function loadAbout() {
    const contentContainer = document.querySelector('#contContainer');
    contentContainer.textContent = 'Please excuse any cat hair in your food and this basic design. This is my first go at webpack, and I did not spend much time on css';
    console.log('About.js is linked');
}

export {loadAbout}