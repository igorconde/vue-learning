let postagem = {
  props: ["titulo"],
  methods: {
    responder: function () {
      this.$emit("responder", this.titulo);
    },
  },
  template: `<div>
              <h2>{{titulo}}</h2>
              <p><slot></slot></p>
              <button @click="responder">Responder</button>
            </div>`,
};

let app = new Vue({
  el: "#main",
  data: {
    responderAberto: false,
    responderTitulo: "",
  },
  components: {
    postagem,
  },
  computed: {},
  watch: {},
  methods: {
    abrirResposta: function (titulo) {
      this.responderAberto = true;
      this.responderTitulo = titulo;
    },
  },
});
