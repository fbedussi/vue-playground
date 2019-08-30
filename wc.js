class Layer extends HTMLElement {
  constructor() {
    super();
  }

  closeAllLayers() {
    this.layer.classList.remove("active");
  }

  handleClick() {
    this.closeAllLayers();
    this.layer.classList.toggle("active");
  }
}

class AccountLayer extends Layer {
  constructor() {
    super("account");
  }

  connectedCallback() {
    this.button = this.querySelector("button");
    this.layer = this.querySelector(".layer");

    this.button.addEventListener("click", () => {
      this.handleClick();
    });
  }
}

class CartLayer extends Layer {
  constructor() {
    super("cart");
  }

  connectedCallback() {
    this.button = this.querySelector("button");
    this.layer = this.querySelector(".layer");

    this.button.addEventListener("click", () => {
      this.handleClick();
    });
  }
}

window.customElements.define("wc-account", AccountLayer);
window.customElements.define("wc-cart", CartLayer);
