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
    objeto: {
      nome: "Igor",
      idade: 99,
      pai: "Fulano",
      mae: "Fulano",
    },
  },
  computed: {},
  watch: {},
  methods: {},
});
