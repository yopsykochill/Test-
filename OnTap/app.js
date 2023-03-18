const { Axios } = require('axios');

//Destructuring
const user = {
  name: 'Tan',
  age: 20,
  sex: 'male',
};

// co nhieu cach de lay ra thuoc tinh cua 1 object
// const name = user.name;
// const age = user.age;
// const sex = user.sex;

// cach nay dung destructuring
// const { age, name, sex } = user;

// //destructuring voi array

// const list = [20, 'tan'];
// const [tuoi, ten] = list;

// //shallow copy voi Spread syntax
// //shallow copy chi copy nhung thuoc tinh dau tien, k copy duoc nested obj
// const cloneUser = { ...user };

// //Rest Parameter
// const handle = ({ a, b, ...c }) => {
//   return c;
// };
// const value = handle(1, 2, 3, 4, 5, 6);
// console.log(value);
// //

//fetch API

//axios
const http = axios.create({
  baseURL: 'http://reqres.in/api',
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
http
  .get('/users/2')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
