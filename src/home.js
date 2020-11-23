

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
    addH1();addButtonContainer(); addContentContainer();

    addAboutButton(); addContactButton(); addMenuButton();
};


/* DRY for contact and menu 

function loadContact() {
    const contentContainer = document.querySelector('#contContainer');
    contentContainer.textContent = 'Contact me at:';
    const list = document.createElement('UL');
    const li1 = document.createElement('LI');
    li1.textContent = 'GitHub: https://github.com/CatQueenCodes';

    const li2 = document.createElement('LI');
    li2.textContent = 'Discord: Cat Queen#7475 ';

    const li3 = document.createElement('LI');
    li3.textContent = '1-800-meowww';

    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    contentContainer.appendChild(list);
    console.log('contact.js is linked');
}
*/

export {renderMainPage}
