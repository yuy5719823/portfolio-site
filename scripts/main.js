document.addEventListener("DOMContentLoaded", function () {
  new Main();
});

class Main {
  constructor() {
    this.gloablContainer = document.querySelector("#global-container");
    this.menuItems = document.querySelectorAll(".mobile-menu__item");
    this._init();
  }

  _init() {
    this._setMobileIcon();
    new HeroSlider(".swiper");
    this.skilCharts = new MakeChartList();
    this._setScrollObserver();
  }

  _setMobileIcon() {
    document.querySelector(".mobile-menu__icon").addEventListener("click", function () {
      this.gloablContainer.classList.toggle("menu-open");
    });
    this.menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        this.gloablContainer.classList.remove("menu-open");
      });
    });
  }

  //スクロール
  _inviewAnimation(dom, inview) {
    if (inview) {
      dom.classList.add("inview");
    } else {
      dom.classList.remove("inview");
    }
  }

  _setScrollObserver() {
    const aboutScroll = new ScrollObserver(".profile", this._inviewAnimation);
    const setLine = new ScrollObserver(".setline", this._inviewAnimation);
    const productScroll = new ScrollObserver(".product", this._inviewAnimation);
    const skilScroll = new ScrollObserver(
      ".skilList",
      (dom, inview) => {
        if (inview) {
          dom.classList.add("inview");
          this.skilCharts.animateChart();
        } else {
          dom.classList.remove("inview");
        }
      },
      { once: true }
    );
  }
}
