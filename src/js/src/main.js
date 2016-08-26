'use strict';

(function () {

  ////////////////////////////////////

  active();


  

})();

function active(){
  slider();
  tab();
  form();
}

function slider(){
  $('#slides').superslides({
    animation: 'fade', // 'slide', 'fade''
    play: 4000, //
  });
  $('.bxslider').bxSlider({
    mode: 'fade', //'horizontal', 'vertical', 'fade'
    speed: 500, // speed animation
    pager: true, // icon pager
    auto: false,
    pause: 4000, // speed transition
    infiniteLoop: false, 
    hideControlOnEnd: true,
    controls: true, // icon arrow
    nextText:'',
    prevText:'',
  });
}

function navLateral(){ 
  $('html').toggleClass( 'overflow');
  $( '.nav__lateral--menu' ).toggleClass( 'slideInLeft');
  $( '.nav__lateral--fondo' ).fadeToggle( 'fast');
  $( '.nav__icon' ).toggleClass( 'icon-close icon-navicon')
}

function tab(){
  var $tab = $('.tab a');
  $('.tabs .tab:first-child a').addClass('indicator');
  $('.tab__conte > div:first-of-type').show();

  $tab.click(function(e){
    e.preventDefault();
    var $ambito = $(this).parents(':eq(3)'),
    $tabGroup = $ambito.children('.tab__conte').children('div'),
    $target;
    $target = $(this).attr('href');
    $ambito.find('a').removeClass('indicator');
    $(this).addClass('indicator');
    $($tabGroup).hide(); 
    $($target).show();
  });
}

function form(){
  // INPUT
  var elementos = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea, select';
  $(document).on('focus',elementos, function () {
    $(this).siblings('label').addClass('label--active');
  });
  $(document).on('blur',elementos, function () {
    if($(this).val().length === 0){
      $(this).siblings('label').removeClass('label--active');
      $(this).removeClass('input--success'); // se puede quitar
    }else{
      $(this).addClass('input--success'); // se puede quitar
    }
  });
  // INPUT:FILE
  $(document).on('change', 'input[type="file"]', function () {
    var path_input = $('.file_input');
    var files      = $(this)[0].files;
    var file_names = [];
    for (var i = 0; i < files.length; i++) {
      file_names.push(files[i].name);
    }
    path_input.val(file_names.join(" || "));
    path_input.trigger('change');

    if(path_input.val()){
      path_input.addClass('input--success');
    }else{
      path_input.removeClass('input--success');
    }
  });
}