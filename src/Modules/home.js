//Add main page elements
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

    addH1();addButtonContainer(); addContentContainer();
    ['About', 'Menu', 'Contact'].forEach(btn => createButton(btn));
};

//DRY for button creation
function createButton(name){
    const button = document.createElement('button');
    button.setAttribute('id', name.toLowerCase() + 'Button');
    button.className = 'button';
    button.textContent = name;
    btnContainer.appendChild(button);
}

export {renderMainPage}
