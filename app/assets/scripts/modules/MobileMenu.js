import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header");
    this.siteHeaderMenu = $(".site-header__menu");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.primaryNav = $(".primary-nav");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.siteHeaderMenu.slideToggle("show");
    // this.menuContent.slideToggle("show"); //.toggleClass("site-header__menu-content--is-visible");
    // this.primaryNav.toggleClass("primary-nav--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;