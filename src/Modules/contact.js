
import {createList} from './helper'
/*
function loadContact(){
    createList('Contact me at:', 'GitHub: https://github.com/CatQueenCodes', 'Discord: Cat Queen#7475', '1-800-meowww'); 
} */
const contact = {
    renderAreaId: 'contContainer',
    render: (location) => {createList('Contact me at:', 'GitHub: https://github.com/CatQueenCodes', 'Discord: Cat Queen#7475', '1-800-meowww')}
}
export {contact}
