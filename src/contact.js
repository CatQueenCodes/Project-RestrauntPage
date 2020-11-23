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

export {loadContact}