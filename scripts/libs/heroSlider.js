class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._init();
  }

  _init() {
    return new Swiper(this.el, {
      // 設定値
      loop: true,
      speed: 1500,
      effect: "fade",
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }
}
