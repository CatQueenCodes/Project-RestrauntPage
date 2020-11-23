function loadMenu() {
    const contentContainer = document.querySelector('#contContainer');
    const list = document.createElement('UL');
    const li1 = document.createElement('LI');
    li1.textContent = 'Cat Nip';

    const li2 = document.createElement('LI');
    li2.textContent = 'Treats';

    const li3 = document.createElement('LI');
    li3.textContent = 'Tuna Fish';

    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    contentContainer.appendChild(list);
    console.log('menu.js is linked');
}
/*
Wet food, Dry food, Cat treats. 
*/
export {loadMenu}