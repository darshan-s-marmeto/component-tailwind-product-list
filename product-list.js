class productListSlider extends HTMLElement {
  constructor() {
    super();
    this.splideInstance = null;
  }

  connectedCallback() {
    this.initializeSplide();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  initializeSplide() {
    if (!this.splideInstance) {
      this.classList.add('splide')
      const _this = this;
      const track = this.querySelector('.splide__track');
      const list = this.querySelector('.splide__list');

      if (track && list) {
        const autoplay = this.getAttribute('data-autoplay') === 'true';
        const interval = parseInt(this.getAttribute('data-interval'), 10) * 1000;
        const pagination = this.getAttribute('data-pagination') === 'true';
        const arrows = this.getAttribute('data-arrows') === 'true';
        const desktopCount = this.getAttribute('data-desktopcount') || 4;
        const mobileCount = this.getAttribute('data-mobilecount') || 2;
        const type = autoplay? 'loop': 'slide';

        this.splideInstance = new Splide(_this, {
          type: type,
          perPage: parseInt(desktopCount),
          perMove: 1,
          autoplay: autoplay,
          interval: interval,
          pagination: pagination,
          arrows: arrows,
          breakpoints: {
            768: {
              perPage: parseInt(mobileCount),
            }
          },
          breakpoints: {
            400: {
              perPage: 1.3
            }
          }
        }).mount();
      } else {
        console.error('[splide] A track/list element is missing.');
      }
    }
  }

  handleResize() {
    this.initializeSplide();
  }
}

customElements.define('product-list-slider', productListSlider);
