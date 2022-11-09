export const MENU ={
    SignIn: document.getElementById('menu-signin'),
    Home:  document.getElementById('menu-home'),
    Purchases: document.getElementById('menu-purchases'),
    SignOut: document.getElementById('menu-signout'),
}

export const FormSignIn = document.getElementById('form-signin');

export const modalInfobox = {
    modal: new bootstrap.Modal(document.getElementById('modal-infobox'), {backdrop: 'static'}),
    title: document.getElementById('modal-infobox-title'), 
    body: document.getElementById('modal-infobox-body'),
}

export const modalSignIn = new bootstrap.Modal(document.getElementById('modal-signin-form'), {backdrop: 'static'});