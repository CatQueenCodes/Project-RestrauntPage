

const renderMainPage = () => {
    const container = document.getElementById('content');
    const btnContainer = document.createElement('div');

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
        
        btnContainer.setAttribute('id', 'btnContainer')
        btnContainer.textContent='button container';
        container.appendChild(btnContainer);
    }
    function addContentContainer() {
        const contentContainer = document.createElement('div');
        contentContainer.setAttribute('id', 'contContainer')
        contentContainer.textContent = "SAMPLE CONTENT";
        container.appendChild(contentContainer);
    }

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
    addH1(); addPhoto(); addButtonContainer(); addContentContainer();

    addAboutButton(); addContactButton(); addMenuButton();
};



export {renderMainPage}
