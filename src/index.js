import "./style.css"
import {renderMainPage} from './Modules/home'
import {about} from './Modules/about'
import {loadMenu} from './Modules/menu'
import {loadContact} from './Modules/contact'
import {renderPage} from './Modules/helper'


renderMainPage();

// add event listeners to my tabs/buttons
const tabs = [
    {id: 'menuButton', render: loadMenu},
    {id: 'aboutButton', render: renderPage(about)},
    {id: 'contactButton', render: loadContact},
];

tabs.forEach(tab => {
    const tabButton = document.getElementById(tab.id);
    tabButton.addEventListener('click', tab.render)
});

console.log('index.js is linked');


/* pre-Drying
function tabEventListener() {
    const menuTab = document.getElementById('menuButton');
    menuTab.addEventListener('click', loadMenu);
   
    const aboutTab = document.getElementById('aboutButton');
    aboutTab.addEventListener('click', loadAbout);
   
    const contactTab = document.getElementById('contactButton');
    contactTab.addEventListener('click', loadContact);
}
*/