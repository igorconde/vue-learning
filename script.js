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
    nome: "Igor",
  },
  beforeCreate: function () {
    console.log(this.nome);
  },
  created: function () {
    console.log(this.nome);
  },
  beforeMount: function () {
    console.log(this.nome);
  },
  mounted: function () {
    console.log(this.nome);
  },
  beforeUpdate: function () {
    console.log(this.nome);
  },
  updated: function () {
    console.log(this.nome);
  },
  beforeDestroy: function () {
    console.log(this.nome);
  },
  destroyed: function () {
    console.log(this.nome);
  },
});
