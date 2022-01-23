const App = {
  // 資料(函式)
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "vanmoritz",
      products: [],
      singleShow: {},
    };
  },
  methods: {
    checkAdmin() {
      axios.post(`${this.apiUrl}/api/user/check`)
      .then((res) => {
        this.getData()})
      .catch((err)=>{
        alert(err.data.message)
        window.location = 'index.html';
      })
    },
    getData(){
      axios.get(`${this.apiUrl}/api/${this.apiPath}/admin/products`)
      .then((res)=>{
        this.products = res.data.products;
      })
      .catch((err)=>{
        alert(err.data.message);
      })
    }
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)vanMoritzToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin()
  },
};
Vue.createApp(App).mount("#app");
