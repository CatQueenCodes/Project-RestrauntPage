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

//DRY for MENU and CONTACT page lists. 
function createList(title, item1, item2, item3) {
    const contentContainer = document.querySelector('#contContainer');
    contentContainer.textContent = title;
    const list = document.createElement('UL');

    const li1 = document.createElement('LI');
    li1.textContent = item1;

    const li2 = document.createElement('LI');
    li2.textContent = item2;

    const li3 = document.createElement('LI');
    li3.textContent = item3;

    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    contentContainer.appendChild(list);
    console.log(title + 'is linked');
}

export {renderMainPage, createList}

