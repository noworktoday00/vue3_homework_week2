// const emailInput = document.querySelector("#username");
// const pwInput = document.querySelector("#password");
// const loginBtn = document.querySelector("#login");

// const url = "https://vue3-course-api.hexschool.io/v2";
// const path = "vanmoritz";

// loginBtn.addEventListener("click", login);

// function login() {
//   const username = emailInput.value;
//   const password = pwInput.value;

//   const user = {
//     username,
//     password,
//   };

//   axios
//     .post(`${url}/admin/signin`, user)
//     .then((res) => {
//       console.log(res);
//       const { token, expired } = res.data;
//       console.log(token, expired);
//       document.cookie = `vanMoritzToken=${token};expires=${new Date(expired)};`;
//     })
//     .catch((err) => {
//       console.dir(err);
//     });
// }

//建立基本vue架構
const App = Vue.createApp({
  data() {
    return {
      //user驗證的回傳值
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const loginApi = "https://vue3-course-api.hexschool.io/v2/admin/signin";
      //axios進行login動作
      axios
        .post(loginApi, this.user)
        .then((res) => {
          //解構res.data取出token&expired時間
          const { token, expired } = res.data;
          document.cookie = `vanMoritzToken=${token};expires=${new Date(
            expired
          )};`;
          //跳轉到產品頁面
          window.location = "products.html";
        })
        .catch((err) => {
          alert(err.data);
          // console.dir(err);
        });
    },
  }, 
}).mount("#app");  //將App掛載到#app上
