$(function(){
  $('button.btn_cancelar').on('click',function(){
    $('ion-pane[name=box]').addClass('animated rotateOutUpLeft');
  })
});

$(function(){
  $('button.btn_check').on('click',function(){
    $('ion-pane[name=box]').addClass('animated rotateOutUpRight');
  })
});
