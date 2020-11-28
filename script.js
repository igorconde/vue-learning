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
    errorMsg: "",
    errorType: "",
  },
  computed: {
    errorDivClass: function () {
      let r = { ativo: false, warning: false, error: false };

      if (this.errorMsg != "") {
        r.ativo = true;
      }

      switch (this.errorType) {
        case "warning":
          r.warning = true;
          r.error = false;
          break;
        case "error":
          r.warning = false;
          r.error = true;
          break;
      }
      return r;
    },
  },
  watch: {},
  methods: {
    showWarning: function (msg) {
      this.errorMsg = msg;
      this.errorType = "warning";
    },
    showError: function (msg) {
      this.errorMsg = msg;
      this.errorType = "error";
    },
    hideError: function () {
      this.errorMsg = "";
    },
  },
});
