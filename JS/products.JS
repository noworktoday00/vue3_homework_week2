const App = {
  // 資料(函式)
  data() {
    return {
      // 將api的Url以及路徑先設定好
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "vanmoritz",
      // 產品以及單一資料顯示的空陣列&物件做好
      products: [],
      singleShow: {},
    };
  },
  methods: {
    checkAdmin() {
      // 確認登入狀態的api
      axios.post(`${this.apiUrl}/api/user/check`)
      .then((res) => {
        this.getData()})
      .catch((err)=>{
        alert(err.data.message)
        window.location = 'index.html';
      })
    },
    getData(){
      // 提取產品列表的api
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
    // 驗證cookie的token，後面那一串看不懂的是正規表達式
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)vanMoritzToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin()
  },
};
Vue.createApp(App).mount("#app");
