'use strict';

(function () {

  ////////////////////////////////////

  active();


  

})();

function active(){
  console.log('inicio');
  tab();
}

function tab(){
  var $tab = $('.tab a');
  var $tabGroup = $('.tab__conte').children('div');
  var $target;

  $('.tabs .tab:first-child a').addClass('indicator');
  $('.tab__conte > div:first-of-type').show();

  $tab.click(function(){
    
    $target = $(this).attr('href');

    $($tab).removeClass('indicator');
    $(this).addClass('indicator');
     

     $($tabGroup).hide();
     $($target).show();
  });
}