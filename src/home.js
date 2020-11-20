


// add head, pic, button container, content container

const mainFeatures = () => {
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
    function addButtonContainer() {
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');
        btnContainer.setAttribute('id', 'btnCont')
        btnContainer.textContent='button container';
        container.appendChild(btnContainer);
    }
    function addContentContainer() {
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('cont-container')
        contentContainer.textContent = "SAMPLE CONTENT";
        container.appendChild(contentContainer);
    }
    addH1(); addPhoto(); addButtonContainer(); addContentContainer();
};


//creates 3 buttons
const createButtons = () => {
    const btnContainer = document.querySelector('.btn-container')
    function addAboutButton() {
        const aboutButton = document.createElement('button');
        aboutButton.textContent = 'About';
        btnContainer.appendChild(aboutButton);
    }
    function addMenuButton() {
        const menuButton = document.createElement('button');
        menuButton.textContent = 'Menu';
        btnContainer.appendChild(menuButton);
    }
    function addContactButton(){
        const contactButton = document.createElement('button');
        contactButton.textContent = 'Contact';
        btnContainer.appendChild(contactButton);
    }
    addAboutButton(); addContactButton(); addMenuButton();
};

function renderMainPage(){
    mainFeatures();
    createButtons()
}

export {renderMainPage}