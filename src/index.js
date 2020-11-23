import "./style.css"
import {renderMainPage} from './home'
import {loadAbout} from './about'
import {loadMenu} from './menu'
import {loadContact} from './contact'


renderMainPage();
loadAbout();

// add event listeners 
function tabEventListener() {
    const menuTab = document.getElementById('menuButton');
    menuTab.addEventListener('click', loadMenu);
   
    const aboutTab = document.getElementById('aboutButton');
    aboutTab.addEventListener('click', loadAbout);
   
    const contactTab = document.getElementById('contactButton');
    contactTab.addEventListener('click', loadContact);
}
 tabEventListener();

console.log('index.js is linked');

