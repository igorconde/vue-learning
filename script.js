/*
beforeCreate - Antes da execução (Geralmente usado para influenciar em outros elementos)
created - Quando o elemento é criado
beforeMount - Quando o elemento foi criado porém não é exibido na tela
mounted = quando o elemento é renderizado na tela
beforeUpdate - Antes de atualização
updated: quando o elemento é atualizado ou modificado
beforeDestroy - Antes do elemento destruid
destroyed - quando o elemento é destruido
*/

let app = new Vue({
  el: "#app",
  data: {
    conta: "",
    aviso: "",
    resultado: "",
    timer: null,
  },
  methods: {
    fazerConta: function () {
      this.aviso = "";

      this.resultado = eval(this.conta);
    },
  },
  watch: {
    conta: function () {
      this.aviso = "Digitando....";

      if (this.timer != null) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(this.fazerConta, 1000);
    },
  },
  computed: {},
});
