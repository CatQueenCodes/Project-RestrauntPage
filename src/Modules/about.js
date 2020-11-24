/*
function loadAbout() {
    const contentContainer = document.querySelector('#contContainer');
    const photo = document.createElement('img');
    photo.src = '/src/cat.jpg';
    contentContainer.textContent = 'Please excuse any cat hair in your food and this basic design. This project is meant to be an introduction to webpack, and I did not spend much time on CSS. Tried to keep it DRY.';
    contentContainer.appendChild(photo);
    console.log('About.js is linked');
}
*/

const about = {
    renderAreaId: 'contContainer',
    render: (location) => {
        const photo = document.createElement('img');
        photo.src = '/src/cat.jpg';
        location.textContent = 'Please excuse any cat hair in your food and this basic design. This project is meant to be an introduction to webpack, and I did not spend much time on CSS. Tried to keep it DRY.';
        location.appendChild(photo);
        console.log('about.js is loaded');
    }
}


export {about}