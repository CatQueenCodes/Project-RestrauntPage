//functin to create list in my menu and contact page
function createList(location,title, ...arggs) {
    location.textContent = title;
    const list = document.createElement('ul');
    [...arggs].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
    location.appendChild(list);
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





/*
const createList = {
    render: (location,title, ...arggs) => {
        location.textContent = title;
        const list = document.createElement('ul');
        [...arggs].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
        location.appendChild(list);
    }
} 
*/