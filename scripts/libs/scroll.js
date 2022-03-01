class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    this.cb = cb;
    const defaultOptions = {
      root: null,
      rootMargin: "-200px 0px",
      threshold: 0,
      once: true,
    };
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }

  _init() {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          // entry.target.classList.add("inview");
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    const io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach((el) => io.observe(el));
  }
}
