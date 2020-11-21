import "./style.css"
import {renderMainPage} from './home'
import {loadAbout} from './about'
import {loadMenu} from './menu'
import {loadContact} from './contact'

renderMainPage();

//add to buttons
loadAbout();
loadMenu();
loadContact();

console.log('index.js is linked');

