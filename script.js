Vue.component("menuTest", {
  data: function () {
    return {
      texto: "Texto Qualquer",
    };
  },
  template: `<button>{{texto}}</button>`,
});

let app = new Vue({
  el: "#app",
  data: {},
  computed: {},
  watch: {},
  methods: {},
});
