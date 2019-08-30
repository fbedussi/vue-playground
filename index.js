const Card = Vue.component("rb-card", {
  methods: {
    clicco: () => console.log("clicco")
  }
});

const layer = {
  props: {
    active: Boolean
  }
};

const Account = Vue.component("rb-account", layer);
const Cart = Vue.component("rb-cart", layer);

const app = new Vue({
  el: "#app",
  data: {
    activeLayer: ""
  },
  components: {
    "rb-account": Account,
    "rb-card": Card
  }
});
