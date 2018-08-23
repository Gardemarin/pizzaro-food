import $ from 'jquery';

import { TweenMax, Power3, TimelineMax } from "gsap/umd/TweenMax";

class Slider {

  constructor(initialParams) {

    this.tl = new TimelineMax();

    this.flagFirstLoad = initialParams.flagFirstLoad || true;
    this.sliderClass = initialParams.sliderClass;
    this.sliderInnerClass = initialParams.sliderInnerClass;
    this.linksClass = initialParams.linksClass;
    this.activeLinkClass = initialParams.activeLinkClass;
    this.orientation = initialParams.orientation || 'horizontal';

    this.box = document.querySelector(this.sliderClass);
    this.boxInner = document.querySelector(this.sliderClass + ' ' + this.sliderInnerClass);
    this.links = $(this.linksClass);
    this.slider = $(this.sliderClass);

    this.events();
    $(this.linksClass + this.activeLinkClass).trigger('slide');
  }

  events() {
    this.links.on('slide', this.slideTo.bind(this));

    this.links.hover(
      this.slideTo.bind(this),
      () => {
        this.delayReturnToActiveBtn = setTimeout(() => {
          $(this.linksClass + this.activeLinkClass).trigger('slide');
        }, 300);
      });

    this.links.on('click', (e) => {
      this.links.removeClass('active');
      $(e.currentTarget).addClass('active');
    });
  }

  slideTo(event) {
    let rect = this.box.getBoundingClientRect();
    this.delayReturnToActiveBtn && clearTimeout(this.delayReturnToActiveBtn);
    if (!$.contains(event.currentTarget, this.box) || this.flagFirstLoad) {
      this.flagFirstLoad = false;
      event.target.appendChild(this.box);

      this.tl.kill();
      this.tl = new TimelineMax();
      this.tl.eventCallback("onUpdate", null);
      this.tl.set(this.box, { x: 0, y: 0 });
      var newRect = this.box.getBoundingClientRect();

      if (this.orientation == 'vertical') {
        this.tl.from(this.box, 1, {
          x: rect.left - newRect.left,
          y: rect.top - newRect.top,
          ease: Power3.easeOut,
          onUpdate: this.addLightClass,
          onUpdateParams: ['{self}', this, event.currentTarget]
        });
      } else {
        this.tl.from(this.box, 1, {
            x: rect.left - newRect.left,
            y: rect.top - newRect.top,
            ease: Power3.easeOut
          })
          .fromTo(this.box, 1, { width: this.slider.width() }, { width: $(event.currentTarget).width() }, 0)
          .to(this.boxInner, 1, {
            width: $(event.currentTarget).width() / 2,
            ease: Power3.easeOut
          }, 0);
      }
    }
  }

  addLightClass(tween, slider, parent) {
    slider.links.removeClass('light');
    if (Math.abs(tween.target._gsTransform.y) < 40) {
      $(parent).addClass('light');
    }
  }
}

export default Slider;