$(function(){
   /* global $ */
    
    $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').removeClass('fas fa-chevron-up').addClass('fas fa-chevron-down');
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').removeClass('fas fa-chevron-down').addClass('fas fa-chevron-up');
      
    }
    });
    
    $('.pagetop').click(function(){
      $('html,body').animate({ 
        'scrollTop': 0 
      }, 'slow');
    });
    
    
    $(window).scroll(function() {
  		if ($(this).scrollTop() > 60) {
  			$('.pagetop').fadeIn();
  		} else {
  			$('.pagetop').fadeOut();
  		}
   	});
    
});
