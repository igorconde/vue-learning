let postagem = {
  props: ["titulo", "corpo"],
  template: `<div><h2>{{titulo}}<br><span>{{corpo}}</span></h2></div>`,
};

let app = new Vue({
  el: "#main",
  data: {},
  components: {
    postagem,
  },
  computed: {},
  watch: {},
  methods: {},
});
