(function($) {
 "use strict"; // Start of use strict  
/*------------------------------------------------
 * Preloader 
------------------------------------------------*/  
	$(window).load(function() {
		$('#loading').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
		   $('#modal1').modal('show');
 });
/*------------------------------------------------
 * Affix   
------------------------------------------------*/  
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.scroll',
        offset: 0
    })    

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    
/*------------------------------------------------
 * owlCarousel    
------------------------------------------------*/  
$(function () {
              var owl = $(".owl-carousel");
 
  owl.owlCarousel({
  		 autoPlay: 3000,
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").on('click', function(){
    owl.trigger('owl.next');
  });
  $(".prev").on('click', function(){
    owl.trigger('owl.prev');
  });
        });         

$(function () {
              var owl = $(".owl-color");
 
  owl.owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next3").on('click', function(){
    owl.trigger('owl.next');
  });
  $(".prev3").on('click', function(){
    owl.trigger('owl.prev');
  });
        });   
        
$(function () {
              var owl = $(".owl-size");
 
  owl.owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next2").on('click', function(){
    owl.trigger('owl.next');
  });
  $(".prev2").on('click', function(){
    owl.trigger('owl.prev');
  });
        });         

})(jQuery); // End of use strict
