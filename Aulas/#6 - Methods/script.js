let app = new Vue({
  el: "#app",
  data: {},
  methods: {
    hello: (nome, idade) => {
      let txt = `Olá ${nome} - ${idade} anos`;
      return txt;
    },
    arrowFunction: () => `Arrow Function`,
  },
});
