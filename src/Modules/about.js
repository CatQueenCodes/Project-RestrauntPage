const about = {
    renderAreaId: 'contContainer',
    render: (location) => {
        const photo = document.createElement('img');
        photo.src = '/src/cat.jpg';
        location.textContent = 'Please excuse any cat hair in your food and this basic design. This project is meant to be an introduction to webpack, and I did not spend much time on CSS. Focused on DRY, Objects, and clean code.';
        location.appendChild(photo);
        console.log('about.js is loaded');
    }
}
export {about}