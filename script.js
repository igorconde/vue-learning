Vue.component("contador", {
  data: function () {
    return {
      c: 0,
    };
  },
  methods: {
    increment: function () {
      this.c++;
    },
  },
  template: `
          <div>
          <span class="text-base font-medium text-gray-500 hover:text-gray-900">{{c}}X 
          <a href="#" @click="increment" class="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-0 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Aumentar
          </a>
          </span>
          </div>`,
});

let app = new Vue({
  el: "#app",
  data: {},
  computed: {},
  watch: {},
  methods: {},
});
