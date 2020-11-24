
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

//Render about/menu/home
function renderPage(page) {
    return () => {
    const renderArea = document.getElementById(page.renderAreaId);
    renderArea.innerHTML = '';
    page.render(renderArea);
    }
}


export {createList, renderPage};