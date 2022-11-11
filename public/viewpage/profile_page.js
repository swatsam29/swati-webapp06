import { MENU, root } from "./elements";

export function addEventListeners(){
    MENU.Profile.addEventListener('click', async ()=>{
        await profile_page();
    });
}

async function profile_page(){
    root.innerHTML= '<h1>Profile Page</h1>'
}