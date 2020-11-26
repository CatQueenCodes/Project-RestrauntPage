import {createList} from './helper'

const menu = {
    renderAreaId: 'contContainer',
    render: (location) => {
        createList(location, 'Our Menu: Cat Approved','Cat Nip', 'Treats', 'Tuna Fish' )
    }
}



export {menu}

