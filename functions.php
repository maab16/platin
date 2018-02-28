<?php
/**
 * Platin enqueue scripts and styles.
 */
function platin_enqueue_scripts(){
	
    // Latest Bootstrap min CSS
	wp_enqueue_style( 'bootstrap-min', get_theme_file_uri( '/assets/css/bootstrap.min.css' ), array(), '3.3.6' );
	// Dropdownhover CSS
	wp_enqueue_style( 'bootstrap-dropdownhover', get_theme_file_uri( '/assets/css/bootstrap-dropdownhover.min.css' ), array(), '1.0.0' );
	// latest fonts awesome
	wp_enqueue_style( 'font-awesome', get_theme_file_uri( '/assets/font/css/font-awesome.min.css' ), array(), '4.5.0' );
	// Animate CSS
	wp_enqueue_style( 'animate-css', get_theme_file_uri( '/assets/css/animate.min.css' ), array(), '1.0' );
	// Style CSS
	wp_enqueue_style( 'main-css', get_theme_file_uri( '/assets/css/main.css' ), array(), '1.0' );
	// Owl Carousel Assets
	wp_enqueue_style( 'owl-carousel', get_theme_file_uri( '/assets/owl-carousel/owl.carousel.css' ), array(), '1.3.3' );
	wp_enqueue_style( 'bootstrap-min', get_theme_file_uri( '/assets/owl-carousel/owl.theme.css' ), array(), '1.3.3' );

  	// Bootstrap Core JavaScript
  	wp_enqueue_script( 'bootstrap-min', get_theme_file_uri( '/assets/js/bootstrap.min.js' ), array( 'jquery' ), '3.3.6', true );
  	//
  	wp_enqueue_script( 'bootstrap-dropdownhover', get_theme_file_uri( '/assets/js/bootstrap-dropdownhover.min.js' ), array( 'jquery' ), '1.0.0', true );
  	// Plugin JavaScript
  	wp_enqueue_script( 'jquery-easing', get_theme_file_uri( '/assets/js/jquery.easing.min.js' ), array( 'jquery' ), '1.3', true );
 	 // owl carousel
  	wp_enqueue_script( 'owl.-carousel', get_theme_file_uri( '/assets/owl-carousel/owl.carousel.js' ), array( 'jquery' ), '1.3.3', true );
  	// Custom Theme JavaScript
  	wp_enqueue_script( 'custom', get_theme_file_uri( '/assets/js/custom.js' ), array( 'jquery' ), '1.0', true );
}

add_action('wp_enqueue_scripts','platin_enqueue_scripts');