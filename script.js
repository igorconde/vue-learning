const bandeira = (pais) =>
  `<img src="/paises/${pais}.png" style="width:30px" />`;

let app = new Vue({
  el: "#app",
  data: {
    alemanha: bandeira("alemanha"),
    brasil: bandeira("brasil"),
    china: bandeira("china"),
    portugal: bandeira("portugal"),
    usa: bandeira("usa"),
  },
  methods: {
    paises: function () {
      return [
        { bandeira: this.alemanha, continente: "Europa" },
        { bandeira: this.china, continente: "Asia" },
        { bandeira: this.usa, continente: "America do Norte" },
        { bandeira: this.portugal, continente: "Europa" },
      ];
    },
  },
});
