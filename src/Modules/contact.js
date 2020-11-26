
import {createList} from './helper'

const contact = {
    renderAreaId: 'contContainer',
    render: (location) => {
        createList(location, 'Contact me at:', 'GitHub: https://github.com/CatQueenCodes', 'Discord: Cat Queen#7475', '1-800-meowww' )
    }
}
export {contact}
