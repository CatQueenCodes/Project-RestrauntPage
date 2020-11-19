

function loadHome() {
    const container = document.getElementById('content');

    const head = document.createElement('h1');
    head.textContent = "Cat Queen's Cafe";
    container.appendChild(head);

    const photo = document.createElement('img');
    photo.src = '/src/cat.jpg';
    container.appendChild(photo);

    const discription = document.createElement('div');
    discription.textContent = 'Please excuse any cat hair in your food, and this basic design.';
    container.appendChild(discription);
    
console.log ('home.js is linked');
}


export {loadHome}