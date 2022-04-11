import $ from 'jquery';
export const customjquery = ()=>{
    if(window.location.href==window.location.origin+'/login')
    {
      $('body').addClass('login-page');
    }
    else{
        $('body').removeClass('login-page'); 
    }

}