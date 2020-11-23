

const renderMainPage = () => {
    const container = document.getElementById('content');
    const btnContainer = document.createElement('div');

    function addH1(){
        const head = document.createElement('h1');
        head.textContent = "Cat Queen's Cafe";
        container.appendChild(head);
    }
    function addButtonContainer() {
        btnContainer.setAttribute('id', 'btnContainer')
        container.appendChild(btnContainer);
    }
    /*function addPhoto() {
        const photo = document.createElement('img');
        photo.src = '/src/cat.jpg';
        container.appendChild(photo);
    }*/
    function addContentContainer() {
        const contentContainer = document.createElement('div');
        contentContainer.setAttribute('id', 'contContainer')
        contentContainer.textContent = "SAMPLE CONTENT";
        container.appendChild(contentContainer);
    }

    function addAboutButton() {
        const aboutButton = document.createElement('button');
        aboutButton.setAttribute('id', 'aboutButton');
        aboutButton.className = 'button';
        aboutButton.textContent = 'About';
        btnContainer.appendChild(aboutButton);
    }
    function addMenuButton() {
        const menuButton = document.createElement('button');
        menuButton.setAttribute('id', 'menuButton');
        menuButton.className = 'button';
        menuButton.textContent = 'Menu';
        btnContainer.appendChild(menuButton);
    }
    function addContactButton(){
        const contactButton = document.createElement('button');
        contactButton.setAttribute('id', 'contactButton');
        contactButton.className = 'button';
        contactButton.textContent = 'Contact';
        btnContainer.appendChild(contactButton);
    }
    addH1();addButtonContainer(); /*addPhoto();*/  addContentContainer();

    addAboutButton(); addContactButton(); addMenuButton();
};



export {renderMainPage}
