import "./style.css"
import {renderMainPage} from './Modules/home'
import {about} from './Modules/about'
import {menu} from './Modules/menu'
import {contact} from './Modules/contact'
import {renderPage} from './Modules/helper'

renderMainPage();
renderPage(about)();

// add event listeners to my tabs/buttons
const tabs = [
    {id: 'menuButton', render: renderPage(menu)},
    {id: 'aboutButton', render: renderPage(about)},
    {id: 'contactButton', render: renderPage(contact)},
];

tabs.forEach(tab => {
    const tabButton = document.getElementById(tab.id);
    tabButton.addEventListener('click', tab.render)
});
