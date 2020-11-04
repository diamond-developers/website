  /* common fuctions */
  function el(selector) { return document.querySelector(selector) }
  function els(selector) { return document.querySelectorAll(selector) }
  function on(selector, event, action) { els(selector).forEach(e => e.addEventListener(event, action)) }
  function cookie(name) { 
    let c = document.cookie.split('; ').find(cookie => cookie && cookie.startsWith(name+'='))
    return c ? c.split('=')[1] : false; 
  }
  
  
  /* popup button hanler */
  on('_cp button', 'click', () => {
    el('_cp').classList.add('_cp--accepted');
    document.cookie = `_ca=true`
  });
  
  /* popup init hanler */
  if (cookie('_ca-accepted') !== "true") {
    el('.cookie-popup').classList.add('_ca--not-accepted');
  }
  
  
  
  /* page buttons handlers */
  
  function _reset() {
    document.cookie = '_ca-accepted=false'; 
    document.location.reload();
  }
  
  function _switchMode(cssClass) {
    el('_cp').classList.toggle(cssClass);
  }
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
 }
 (function() {

  'use strict';
  
  var $searchView = $('.menu-search-container');
  var $menu = $('.menu-mac, .menu-iPad, .menu-iPhone, .menu-watch, .menu-tv, .menu-support, .menu-search, .menu-store');
  var $fadeScreen = $('.fade-screen');
  
  $('li.menu-search a, .fade-screen, .menu-search-close').on('click', function(e) {
    
    $searchView.toggleClass('active');
    
    setTimeout(function(){
      $searchView.children().find('input').focus();
    }, 1100);
    
    $fadeScreen.toggleClass('visible');
    $menu.removeClass('is-closed');
    $menu.toggleClass('hidden');
    
    e.preventDefault();
  });
  
  $('.fade-screen,.menu-search-close').on('click', function(e) {
    $menu.toggleClass('is-closed');
    e.preventDefault();
  });
    
}())