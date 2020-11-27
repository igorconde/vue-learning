const bandeira = (pais) =>
  `<img src="/paises/${pais}.png" style="width:30px" />`;

let app = new Vue({
  el: "#app",
  data: {
    pais: "",
    alemanha: bandeira("alemanha"),
    brasil: bandeira("brasil"),
    china: bandeira("china"),
    portugal: bandeira("portugal"),
    usa: bandeira("usa"),
  },
  methods: {},
});

app.pais = "usa";
