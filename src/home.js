
const container = document.getElementById('content');


function addH1(){
    const head = document.createElement('h1');
    head.textContent = "Cat Queen's Cafe";
    container.appendChild(head);
}

function addPhoto() {
    const photo = document.createElement('img');
    photo.src = '/src/cat.jpg';
    container.appendChild(photo);
}

function addAbout() {
    const discription = document.createElement('div');
    discription.textContent = 'Please excuse any cat hair in your food, and this basic design.';
    container.appendChild(discription);
}


function tabContainer() {
    const tabMain = document.createElement('div');
    tabMain.classList.add('tabsy');
    container.appendChild(tabMain);
    tabMain.textContent='tab box main container';
    
}


function loadHome() {
    addH1();
    addPhoto();
    tabContainer();
    addAbout();
    
}


export {loadHome}