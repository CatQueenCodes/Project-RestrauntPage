function loadMenu() {
    const contentContainer = document.querySelector('#contContainer');
    const list = document.createElement('UL');
    const li1 = document.createElement('LI');
    li1.textContent = 'Cat Food';
    list.appendChild(li1);
    contentContainer.appendChild(list);
    console.log('menu.js is linked');
}
/*
Wet food, Dry food, Cat treats. 
*/
export {loadMenu}