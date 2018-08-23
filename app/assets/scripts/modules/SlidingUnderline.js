import $ from 'jquery';
import './../modules/SlidingMenu';

class SlidingUnderline {
  constructor() {

    this.menu = $('.primary-nav');
    this.items = this.menu.find('.primary-nav__link');
    new SlidingMenu({
      'menu': this.menu,
      'items': this.items,
      'duration': 300,
      'slidingClass': 'sliding-underline'
    }, {
      'over': this.over,
      'leave': this.leave
    });
  }

  over(current, data) {
    $(data.options.items).removeClass('active');
    $(current).addClass('active');
  }

  leave(current, data) {
    $(data.options.items).removeClass('active');
    $(data.itemActive).addClass('active');
  }

  // events() {
  //   this.menuIcon.click(this.toggleTheMenu.bind(this));
  //   this.orderSummaryBtn.click(this.displayItems.bind(this));
  // }

  // displayItems() {
  //   this.fullList.slideToggle();
  //   this.orderSummaryBtn.toggleClass("order--show");
  // }

  // toggleTheMenu() {
  //   // this.sideMenu.slideToggle("show");

  //   // this.siteHeaderMenu.slideToggle("show");

  //   // this.menuContent.slideToggle("show"); //.toggleClass("site-header__menu-content--is-visible");
  //   // this.primaryNav.toggleClass("primary-nav--is-visible");
  //   this.siteHeader.toggleClass("site-header--is-expanded");
  //   this.sideMenu.toggleClass("side-menu--is-expanded");
  //   this.menuIcon.toggleClass("side-menu__menu-icon--close-x");
  //   this.sideMenuBase.toggleClass("side-menu--is-expanded");
  // }
}

export default SlidingUnderline;