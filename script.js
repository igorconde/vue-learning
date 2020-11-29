//Global Component
Vue.component("contador", {
  templae: `<button>Clicou 3x</button>`,
});

//Local Component

let menuSuperior = {
  template: `<span>Menu</span>`,
};

let main = new Vue({
  el: "#main",
  data: {
    title: "Teste",
  },
  components: {
    "menu-superior": menuSuperior,
  },
  computed: {},
  watch: {},
  methods: {},
});

//2 Stancia

let footer = new Vue({
  el: "#footer",
  data: {
    footer: "Teste",
  },
  computed: {},
  watch: {},
  methods: {},
});
