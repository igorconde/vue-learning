const bandeira = (pais) => `<img src="/paises/${pais}.png" />`;

let app = new Vue({
  el: "#app",
  data: {
    alemanha: bandeira("alemanha"),
  },
  methods: {},
});
