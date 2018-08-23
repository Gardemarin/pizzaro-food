'use strict';
import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
// import SlidingUnderline from './modules/SlidingUnderline';

import Slider from './modules/Slider';

// import RevealOnScroll from './modules/RevealOnScroll';
// import StickyHeader from './modules/StickyHeader';
// import Modal from './modules/Modal';

let verticalSliderData = {
  sliderClass: ".type-color-purple",
  linksClass: ".side-menu__nav__item",
  activeLinkClass: ".active",
  orientation: "vertical"
};

var verticalSlider = new Slider(verticalSliderData);

let horizontalSliderData = {
  sliderClass: ".slidingas",
  sliderInnerClass: ".slidingas__inner",
  linksClass: ".primary-nav__link",
  activeLinkClass: ".active"
};

var horizontalSlider = new Slider(horizontalSliderData);

var mobileMenu = new MobileMenu();
// var slidingUnderline = new SlidingUnderline();
// new RevealOnScroll($(".feature-item"), "85%");
// new RevealOnScroll($(".testimonial"), "60%");
// var stickyHeader = new StickyHeader();
// var modal = new Modal();
console.log('veolia');