import '@babel/polyfill';
import { login , logout } from './login';
import { signup } from './signup';
import { updateData } from './updateSettings';


// DOM ELEMENTS
const loginForm = document.querySelector( '.form--login' );
const signForm = document.querySelector( '.form--signup' );
const logoutBtn = document.querySelector( '.nav__el--logout' );
const userFormData = document.querySelector('.form-user-data')
const userFormSetting = document.querySelector('.form-user-settings')



// DELEGATION
if ( signForm ){
  signForm.addEventListener( 'submit', e =>{
    e.preventDefault();
    const email = document.getElementById( 'email' ).value;
    const name = document.getElementById( 'name' ).value;
    const password = document.getElementById( 'password' ).value;
    const passwordConfirm = document.getElementById( 'passwordConfirm' ).value;

    signup( name, email, password, passwordConfirm )
  } );
}

if ( loginForm ){
  loginForm.addEventListener( 'submit', e =>
  {
    e.preventDefault();
    const email = document.getElementById( 'email' ).value;
    const password = document.getElementById( 'password' ).value;

    login( email, password );
  } );
}

if ( logoutBtn )
  logoutBtn.addEventListener( 'click', logout );


  if ( userFormData ){
    userFormData.addEventListener( 'submit', async e =>
    {
      document.querySelector( '.save__el--data' ).textContent = 'Updatting ...';
      e.preventDefault();
      
      const name = document.getElementById( 'name' ).value ;
      const email =  document.getElementById( 'email' ).value ;
      // const photo =  document.getElementById( 'photo' ).files[ 0 ] ;
      
      await updateData( { name, email } , 'data' );

      document.querySelector( '.save__el--data' ).textContent = 'Save settings';
      
    })
  }
  
  if ( userFormSetting )
  {
    userFormSetting.addEventListener( 'submit', async e =>
    {
      document.querySelector( '.save__el--setting' ).textContent = 'Updatting ...';
      e.preventDefault();
      
      const passwordCurrent = document.getElementById( 'password-current' ).value; 
      const password = document.getElementById( 'password' ).value; 
      const passwordConfirm = document.getElementById( 'password-confirm' ).value; 
      
      await updateData( { passwordCurrent, password, passwordConfirm }, 'password' );


      document.querySelector( '.save__el--setting' ).textContent = 'Save password';

      document.getElementById( 'password-current' ).value = ''; 
      document.getElementById( 'password' ).value = '';
      document.getElementById( 'password-confirm' ).value = '';

    })
}