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
    busca: "",
    nomes: ["Igor", "Fulano", "Ciclano"],
  },
  computed: {
    nomesFiltrados: function (name) {
      return this.nomes.filter(function (nome) {
        if (this.busca != "") {
          if (nome.toLowerCase().indexOf(this.busca.toLowerCase()) > -1) {
            return true;
          }
        } else {
          return true;
        }
      }, this);
    },
  },
  watch: {},
  methods: {},
});
