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
    nomeInput: "",
    aviso: "",
    nomePronto: false,
    lista: [],
    times: null,
  },
  watch: {
    nomeInput: function () {
      if (this.timer != null) {
        clearTimeout(this.timer);
      }
      if (this.nomeInput != "") {
        this.aviso = "Digitando..";
        this.nomePronto = false;
        this.timer = setTimeout(this.ficarPronto, 1000);
      }
    },
  },
  methods: {
    ficarPronto: function () {
      this.aviso = "";

      if (this.nomeInput.length > 2) {
        this.nomePronto = true;
      }
    },
    add: function () {
      this.lista.push(this.nomeInput);
      this.nomeInput = "";
      this.nomePronto = false;
    },
  },
  computed: {
    totalTexto: function () {
      return `Quantidade de nomes na lista ${this.lista.length}`;
    },
  },
});
