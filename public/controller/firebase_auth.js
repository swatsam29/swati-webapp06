import {
    getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

import * as Elements from '../viewpage/elements.js'
import { DEV } from "../model/constants.js";
import * as Util from '../viewpage/util.js'

const auth = getAuth();
export let currentUser = null;

export function addEventListeners() {

    onAuthStateChanged(auth, authStateChanged)

    Elements.FormSignIn.addEventListener('submit', async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const button = e.target.getElementsByTagName('button')[0];
        const label = Util.disableButton(button);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            Elements.modalSignIn.hide();
        } catch (e) {
            if (DEV) console.log(e);
            Util.info('Sign In error', JSON.stringify(e), Elements.modalSignIn);
        }
        Util.enableButton(button, label);
    });

    Elements.MENU.SignOut.addEventListener('click', async () => {
        try {
            await signOut(auth);
        } catch (e) {
            if (DEV) console.log(e);
            Util.info('Sign Out error', JSON.stringify(e));
        }
    });

}

async function authStateChanged(user){
    currentUser= user;
    if(user){
        let menus= document.getElementsByClassName('modal-preauth');
        for (let i = 0; i < menus.length; i++){
            menus[i].style.display = 'none';
        } 
        menus= document.getElementsByClassName('modal-postauth');
        for (let i = 0; i < menus.length; i++){
            menus[i].style.display = 'block';
        }  
        console.log('=== signed in'); 
    }else{
        let menus= document.getElementsByClassName('modal-preauth');
        for (let i = 0; i < menus.length; i++){
            menus[i].style.display = 'block';
        } 
        menus= document.getElementsByClassName('modal-postauth');
        for (let i = 0; i < menus.length; i++){
            menus[i].style.display = 'none';
        }
        console.log('=== signed out'); 
    }
}