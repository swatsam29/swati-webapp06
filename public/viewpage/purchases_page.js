import { MENU, root } from "./elements";

export function addEventListeners(){
    MENU.Profile.addEventListener('click', async ()=>{
        await purchases_page();
    });
}

async function purchases_page(){
    root.innerHTML= '<h1>Purchases Page</h1>'
}