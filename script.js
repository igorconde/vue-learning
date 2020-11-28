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
    url: "https://www.google.com.br",
  },
  methods: {
    fazAlgumaCoisa: () => {
      console.log(
        "Você pode diminuir o tamanho do v-on somente digitando um @"
      );
    },
  },
});
