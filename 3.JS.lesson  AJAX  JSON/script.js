// --------------------------------------------
// | HTTP protocol                            |
// | XML HTTP Request                         |
// |                                          |
// | HTTP methods GET POST      HTTP body     |
// | HTTP Headers content-type                |
// | HTTP STATUS  200 401 601 301             |
// --------------------------------------------

//////////////////////////////////////////////////////// ajax old version
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var result = JSON.parse(xhr.responseText)
//         console.log(result)
//     } else {
//         console.warn('we connect to server but it returns error');
//     }
// }

// xhr.onerror = function(){
//     console.log('we cant connect to server')
// }

// xhr.open('get', 'https://jsonplaceholder.typicode.com/todos', true);
// xhr.send();
///////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////// exersize method 1
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
// xhr.onload = function () {
//     if (this.status >= 200 && this.status < 400) {
//         var ourData = JSON.parse(this.responseText);
//         renderHTML(ourData);
//     } else {
//         alert('error from server side');
//     }
// }
// xhr.send();

// function renderHTML(data) {
//     for (let i = 0; i < 10; i++) {
//         var a = document.createElement('a');
//         document.body.appendChild(a);
//         var smoleImg = document.createElement('img');
//         smoleImg.src = data[i].thumbnailUrl
//         a.appendChild(smoleImg);
//         a.setAttribute('target', '_blank');
//         a.setAttribute('href', data[i].url);
//     };
// }
////////////////////////////////////////////////////////////////////////////// exersize method 2
// var array = [];
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         array = JSON.parse(this.responseText);
//         for (let i = 0; i < 10; i++) {
//             var img = document.createElement("img");
//             document.body.appendChild(img);
//             img.id = "img" + i
//             document.getElementById("img" + i).src = array[i].thumbnailUrl;

//             document.getElementById("img" + i).onclick = function () {
//                 var img1 = document.createElement("img");
//                 document.body.appendChild(img1);
//                 img1.id = "MetsImg" + i;
//                 document.getElementById("MetsImg" + i).src = array[i].url;
//             }
//         }
//     }
// };
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
// xhttp.send();
//////////////////////////////////////////////////////////

////////////////////////////////////////////////////////// with all tools
// var xhr = new XMLHttpRequest()
// // console.log(xhr.readyState)
// xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true)
// xhr.timeout = 1000
// // console.log(xhr.readyState)
// // xhr.onprogress = function() {
// //     console.log(xhr.readyState)
// // }
// xhr.onload = function() {
//     // console.log(xhr.readyState)
//     if(this.status >= 200 && this.status < 400) {
//         var data = JSON.parse(this.responseText)
//         console.log(data)
//     } else {
//         alert('we connected to the server but its return error')
//     }
// }
// xhr.onerror = function() {
//     alert(`we cant connect to server ${this.onerror.text}`)
// }
// xhr.ontimeout = function() {
//     alert('time out')
// }
// xhr.onabort = function() {
//     alert('was aborted',this.readyState)
// }
// xhr.send()
// // xhr.onabort()
////////////////////////////////////////////////////////////

/////////////////////////////////////callbacks
// var posts = [
//     { title: 'post one', body: 'this is post one' },
//     { title: 'post two', body: 'this is  post two' }
// ]

// function getPosts() {
//     setTimeout(() => {
//         var textView = '';
//         posts.forEach((post) => {
//             textView += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = textView;
//     }, 1000)
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback()
//     }, 2000);
// }
// createPost({ title: 'post three', body: 'this is post three' }, getPosts);
/////////////////////////////////////Promisses
// var posts = [
//     { title: 'post one', body: 'this is post one' },
//     { title: 'post two', body: 'this is  post two' }
// ]

// function getPosts() {
//     setTimeout(() => {
//         var textView = '';
//         posts.forEach((post) => {
//             textView += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML += textView;
//     }, 1000)
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong');
//             }
//         }, 2000);
//     });
// }
// createPost({ title: 'post three', body: 'this is post three' })
//     .then(getPosts).catch(err => console.log(err));
////////------------------------await sync
// async function init() {
//     await createPost({ title: 'post three', body: 'this is post three' });
//     getPosts()
// }
// init().catch(err => console.log(err));
//////////////////////////////////////////////////////////
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values));
////////////////////////////////////////////////
// var myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolve text');
//     }, 1000);
// });

// var myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('reject text');
//     }, 2000)
// })
// Promise.all([myPromise, myPromise2]).then(process => {
//         console.log(process)
//     })
//     .catch(err => { console.log(`we fucked ${err}`) });
/////////////////////////////////////////////////////////////////////
// var test = new Promise((resolve, reject) => {
//     const a = 1 + 1;
//     if (a != 2) {
//         resolve('resolve text')
//     } else {
//         reject('reject text')
//     }
// })

// test.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// });
//////////////////////////////////////////////////////// promise request
// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Making request to ${location}`)
//         if (location == 'Google') {
//             resolve('Google says hi')
//         } else {
//             reject('We can only talk to google')
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('processing response')
//         resolve(`extra information & ${response}`)
//     });
// }
// makeRequest('Google').then(response => {
//     console.log('response received')
//     return processRequest(response)
// }).then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })
///////-----------------------------async await request
// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Making request to ${location}`)
//         if (location == 'Google') {
//             resolve('Google says hi')
//         } else {
//             reject('We can only talk to google')
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('processing response')
//         resolve(`extra information & ${response}`)
//     });
// }
// async function doWork() {
//     try {
//         const response = await makeRequest('Google');
//         console.log('response received')
//         const result = await processRequest(response);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// doWork()
///////////////////////////////////////////////////

/////////////////////////////////////////////////  AJAX, PROMISE (then)
// function get(url) {
//   return new Promise((resolve, reject) => {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", `data/${url}.json`, true);
//     xhr.onload = function() {
//       if (xhr.status >= 200 && xhr.status < 400) {
//         resolve(JSON.parse(xhr.responseText));
//       } else {
//         reject(xhr.statustext);
//       }
//     };
//     xhr.onerror = function() {
//       reject(xhr.statusText);
//     };
//     xhr.send();
//   });
// }

// var array = ["friends", "tweets", "videos"];

// array.forEach(each => {
//   get(each).then(response => {
//     console.log(response);
//   });
// });
/////------------------------------------------same with fetch (then)
// function convertData(data) {
//     fetch(`data/${data}.json`).then(response => {
//         return response.json()
//     }).then(result => {
//         console.log(result)
//     }).catch(err => {
//         console.log(err)
//     })
// }
// var array = ['friends', 'tweets', 'videos']
// array.forEach(each => {
//     convertData(each)
// })
///////---------------------------------------- same with fetch (async await)
// async function convertData(data) {
//     try {
//         var data = await fetch(`data/${data}.json`);
//         var convertData = await data.json()
//         console.log(convertData)
//     } catch (err) {
//         console.log(err + 'bla')
//     }
// }
// var array = ['friends', 'tweets', 'videos']
// array.forEach(each => {
//     convertData(each)
// })
/////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////// post request
// var getBtn = document.body.appendChild(document.createElement('button'))
// getBtn.innerHTML = 'getBtn'
// var postBtn = document.body.appendChild(document.createElement('button'))
// postBtn.innerHTML = 'postBtn'

// function getRequest(method, url,data) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url)
//     if(data) {
//         xhr.setRequestHeader('Content-type','application/json')
//     }
//     // xhr.responseType = 'Json'
//     xhr.onload = function () {
//         if(this.status >= 200 && this.status < 400) {
//             console.log(JSON.parse(this.response))
//         } else {
//             console.log('we connected to server but it returns error')
//         }
//     }
//     xhr.onerror = function() {
//         console.log('we cant connect to server')
//     }
//     xhr.send(JSON.stringify(data))
// }
// function getData () {
//     getRequest('GET','https://reqres.in/api/users')
// }
// console.log(bla)
// function setData () {
//     getRequest('POST','https://reqres.in/api/register',{
//         email: "eve.holt@reqres.in",
//         password: "pistol"
//     })
// }

// getBtn.addEventListener('click', getData)
// postBtn.addEventListener('click', setData)
//------------------------------------------------ same with fetch (then)
// var getBtn = document.body.appendChild(document.createElement('button'))
// getBtn.innerHTML = 'getBtn'
// var postBtn = document.body.appendChild(document.createElement('button'))
// postBtn.innerHTML = 'postBtn'

// function sendRequest(method, url, data) {
//     fetch(url, {
//         method: method,
//         body: JSON.stringify(data),
//         headers: data ? { 'Content-Type': 'application/json' } : {}
//     }).then(response => {
//         if (response.status >= 400) {  // !response.ok
//             return response.json().then(errData => {
//                     var error = new Error('something went wrong'+"we connected to server but it returns error")
//                     error.data = errData
//                     throw error
//                 })
//         }
//         return response.json()
//     }).then(data => {
//         console.log(data)
//     }).catch(err => {
//         console.log(err, err.data + 'we cant connect to server')
//     })
// }

// function getData() {
//     sendRequest('GET', 'https://reqres.in/api/users')

// }
// function postData() {
//     sendRequest('POST', 'https://reqres.in/api/register', {
//         "email": "eve.holt@reqres.in",
//         "password": "pistol"
//     })
// }

// getBtn.addEventListener('click', getData)
// postBtn.addEventListener('click', postData)
/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////// token authentication
// document.addEventListener('DOMContentLoaded', () => {
//     sessionStorage.setItem('token', JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\
// eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.\
// SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'))
//     var button = document.body.appendChild(document.createElement('button'))
//     button.innerHTML = 'make request'
//     button.addEventListener('click', sendReq)
// })
// let sendReq = (ev) => {
//     let url = 'https://jsonplaceholder.typicode.com/posts'
//     var h = new Headers()
//     var token = JSON.parse(sessionStorage.getItem('token'))
//     h.append('Authentication', `Bearer ${token}`)
//     let req = new Request(url, {
//         method: 'GET',
//         mode: 'cors',
//         headers: h
//     })
//     fetch(req).then(response => {
//         return response.json()
//     }).then(data => {
//         console.log(data[0])
//     }).catch(err => {
//         console.error(err.message)
//     })
// }
//////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////uploading file
// var user_id = document.body.appendChild(document.createElement('input'))
// user_id.type = 'hidden'
// user_id.value = '75'

// var avatar_img = document.body.appendChild(document.createElement('input'))
// avatar_img.type = 'file'
// avatar_img.id = 'avatar'
// avatar_img.setAttribute('multiple','true')

// var button = document.body.appendChild(document.createElement('button'))
// button.innerHTML = 'button'
// button.addEventListener('click',()=>{
//     var url = 'https://postman-echo.com/post'
//     var h = new Headers()
//     h.append('Accept','application/json')
//     var fd = new FormData()
//     fd.append('user',user_id.value)
//     let image = document.querySelector('#avatar').files[0]
//     fd.append('avatar',image,'example.jpg')
//     var req = new Request(url,{
//         method: 'POST',
//         headers: h,
//         mode: 'no-cors',
//         body: fd
//     })
//     fetch(req).then(response=>{
//             console.log('blabla')
//     })
// })
////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// var root = 'https://jsonplaceholder.typicode.com'
// var uri = root + '/posts'
// var fd = new FormData()
// fd.append('userId',3)
// fd.append('title','this id title')
// fd.append('body','this is the body text of the post')
// var req = new Request(uri,{
//     method: 'POST',
//     mode: 'cors',
//     body: fd
// })
// fetch(req)
// .then(response=>{
//     if(response.ok) {
//         return response.json()
//     } else {
//         throw new Error('bad http')
//     } 
// }).then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log('ERROR:' + err.message)
// })
///////////////////////////////////////////////////

////////////////////////////////////////////////// get params from link
// var query = "?login=" + 999666999 + "&pass=" + 222333;
// var uri = 'http://iptv.moi-dom.tv/api/json/login' + query

// var a = document.body.appendChild(document.createElement('a'))
// a.href = uri
// var params = a.search
// console.log(params)

// console.log(a)
//-------------------------------------------------- remove specific param from uri
// var query = "?login=" + 999666999 + "&pass=" + 222333;
// var uri = 'http://iptv.moi-dom.tv/api/json' + query

// var a = document.body.appendChild(document.createElement('a'))
// a.href = uri
// var params = new URLSearchParams(a.search)   //var params = new URLSearchParams({
//                                              //                     login: 999666999,
//                                              //                     pass: 222333
//                                              //                       })
//                                              console.log(params)
// params.delete('login')
// var specific = params.get('login')
// params.set('pass','changedValue')
// params.set('createdKey','createdValue')
// var firstPart = uri.split('?')[0]
// var filteredParams = params.toString()
// var withoutLogin = `${firstPart}?${filteredParams}`
// console.log(withoutLogin)

// console.log(a)
////////////////////////////////////////////////////////////////

//Axios

//////////////////////////////////////////////////////////////// run interceptors with below examples
// axios.interceptors.request.use(
//   config => {
//     console.log(
//       `${config.method.toUpperCase()} request sent to ${
//         config.url
//       } at ${new Date().getTime()}`
//     );
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
///////////////////////////////////////////////////////////////// get request
// axios({
//   mehtod: "GET",
//   url: "https://jsonplaceholder.typicode.com/todos",
//   params: {
//     _limit: 3
//   }
// }).then(res => console.log(res.data));
//------------------------------------------- short way
// axios
//   .get("https://jsonplaceholder.typicode.com/todos", {
//     params: {
//       _limit: 3
//     },
//     headers: {
//       test: "test"
//     }
//   })
//   .then(res => console.log("axios", res));
//////////////////////////////////////////////////////////// post request
// axios({
//     method: 'POST',
//     url: "https://jsonplaceholder.typicode.com/todos",
//     data: {
//         title: "blabla",
//         completed: true,
//         test: "niam"
//     }
// })
// .then(res=>console.log(res.data))
//----------------------------------------------short way
// axios
// .post("https://jsonplaceholder.typicode.com/todos", {
//       title: 'blabla',
//       completed: true,
//       test: 'niam'
// }).then(res => console.log("axios", res.data));
///////////////////////////////////////////////////////////////replacing data with put
// axios.put("https://jsonplaceholder.typicode.com/todos/2", {
//   title: "replaced title",
//   completed: true
// })
// .then(res=> console.log(res.data))
///////////////////////////////////////////////////////////////updating data with patch
// axios.patch("https://jsonplaceholder.typicode.com/todos/2", {
//   title: "replaced title",
//   completed: true
// })
// .then(res=> console.log(res.data))
/////////////////////////////////////////////////////////// multiply requests
// axios.all([
//     axios.get('https://jsonplaceholder.typicode.com/todos'),
//     axios.get('https://jsonplaceholder.typicode.com/posts')
// ]).then(axios.spread((todos,posts)=> console.log(todos,posts)))  // res=> console.log(res[0],res[1])
// --------------------------------------------- replace spread when using async await
// let getData = async()=>{
//     let[todos,posts] = await axios.all([
//         axios.get('https://jsonplaceholder.typicode.com/todos'),
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//     ])
//     console.log('todos - ',todos,'posts - ',posts)
// }
// getData()
////////////////////////////////////////////////////////////////////body and headers
// axios({
//   method: "post",
//   url: "https://jsonplaceholder.typicode.com/todos",
//   data: { title: "test" },
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "someToken"
//   }
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
//------------------------------------------------ short way
// axios
//   .post(
//     "https://jsonplaceholder.typicode.com/todos",
//     {
//       title: "test"
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "someToken"
//       }
//     }
//   )
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
///////////////////////////////////////////////////////// transformResponse
// axios
//   .post(
//     "https://jsonplaceholder.typicode.com/todos",
//     { title: "test" },
//     {
//       transformResponse: axios.defaults.transformResponse.concat(data => {
//         data.title = data.title.toUpperCase();
//         return data;
//       })
//     }
//   )
//   .then(res => console.log("axios", res));
////////////////////////////////////////////////////////// set default token with some loading issue
// axios.defaults.headers.common[
//   "X-Auth-Token"
// ] = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\
// eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.\
// SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`; // jwt.io
// let data;
// axios
//   .post("https://jsonplaceholder.typicode.com/todos", {
//     title: "test"
//   })
//   .then(res => {
//     data = res;
//     test(data);
//   });
// function test() {
//   if (!data) {
//     return (document.body.innerHTML = "loading...");
//   }
//   console.log(data);
//   return (document.body.innerHTML = "data received, look in console.log");
// }
// test();
////////////////////////////////////////////////////////////////////handling errors
// axios
//   .get("https://jsonplaceholder.typicode.com/todos/forMakeError-how-how", {
//     validateStatus: function(status) {
//       if (status) {
//         return status < 500; //reject only if status is greater or equal to 500
//       }
//     }
//   })
//   //   .get('https://exampleWhereNoResponse')
//   .then(res => console.log(res))
//   .catch(err => {
//     console.log("bred");
//     if (err.response) {
//       // server responded with a status other than 200 range
//       console.log(err.message);
//       console.log(err.response.status);
//       console.log(err.response.data);
//       console.log(err.response.headers);
//     } else if (err.request) {
//       // request was made but no response
//       console.log(err.message);
//       console.log(err.request, "hey");
//     } else {
//       console.log(err.message);
//     }
//   });
/////////////////////////////////////////////////////////CancelToken
// let source = axios.CancelToken.source();
// axios
//   .get("https://jsonplaceholder.typicode.com/todos", {
//     cancelToken: source.token
//   })
//   .then(res => console.log(res))
//   .catch(thrown => {
//     if (axios.isCancel(thrown)) {
//       console.log("request canceled", thrown.message);
//     }
//   });

// if (true) {
//   source.cancel("because of condition");
// }
////////////////////////////////////////////////////////////create method
// let axiosInstance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com',
//     headers: {
//         Test: 'hop'
//     }
// })

// axiosInstance.get('/todos')
// .then(res=>console.log(res))
/////////////////////////////////////////////////////////////////timeout
// axios
//   .get("https://jsonplaceholder.typicode.com/todos", { timeout: 3000 })
//   .then(res => console.log(res));
