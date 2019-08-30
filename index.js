const Card = Vue.component("rb-card", {
  methods: {
    clicco: () => console.log("clicco")
  }
});

const layer = {
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleLayer: function() {
      this.isActive = !this.isActive;
    }
  }
};

const Account = Vue.component("rb-account", layer);
const Cart = Vue.component("rb-cart", layer);

const app = new Vue({
  el: "#app",
  data: {
    layerOpen: ""
  },
  components: {
    "rb-account": Account,
    "rb-card": Card
  }
});
