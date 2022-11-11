import { MENU, root } from "./elements";

export function addEventListeners(){
    MENU.Cart.addEventListener('click', async ()=>{
        await cart_page();
    });
}

async function cart_page(){
    root.innerHTML= '<h1>Cart Page</h1>'
}