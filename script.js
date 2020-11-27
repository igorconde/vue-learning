const bandeira = (pais) =>
  `<img src="/paises/${pais}.png" style="width:30px" />`;

Vue.component("pais", {
  props: ["bandeira", "continente"],
  template: `<p v-html="bandeira + continente"></p>`,
});

let app = new Vue({
  el: "#app",
  data: {
    alemanha: bandeira("alemanha"),
    brasil: bandeira("brasil"),
    china: bandeira("china"),
    portugal: bandeira("portugal"),
    usa: bandeira("usa"),
  },
});
