

function loadAbout() {
    const contentContainer = document.querySelector('#contContainer');
    contentContainer.textContent = 'about button content';
    console.log('About.js is linked');
}
/*Please excuse any cat hair in your food and this basic design. This is my first go at webpack, and I did not spend much time on css*/ 
export {loadAbout}