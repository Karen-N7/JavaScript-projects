// document.querySelector('#getText').addEventListener('click', getText);
// document.querySelector('#getUsers').addEventListener('click', getUsers);
// document.querySelector('#getPosts').addEventListener('click', getPosts);
// document.querySelector('#addPost').addEventListener('click', addPost);

let array = ['getText','getUsers','getPosts','addPost']

array.forEach(item=>{
    document.getElementById(item).addEventListener('click',window[item])
})

function getText() {
    fetch('sample.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            console.log(data)
            document.querySelector('#output').innerHTML = data;
        })
        .catch(function(error) {
            console.log(error)
        })

}

function getUsers() {
    fetch('users.json')
        .then(res => {
            return res.json()
        })
        .then(data => {
            let output = `<h2>Users</h2>`;
            data.forEach(user => {
                output += `
                    <ul>
                        <li>ID:${user.id}</li>
                        <li>Namee:${user.name}</li>
                        <li>Email:${user.email}</li>
                    </ul>
                `;
            });
            document.querySelector('#output').innerHTML = output;
        })
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            let output = `<h2>Posts</h2>`;
            data.forEach(post => {
                output += `
                   <div>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                   </div>
                `;
            });
            document.querySelector('#output').innerHTML = output;
        })
}

function addPost(e) {
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        })
        .then((res) => res.json())
        .then((data) => {
            document.querySelector('#output').innerHTML = data.title +'<br/>' + data.body;
            console.log(data)
        })
}





// let requests = [
//   { id: "getText", method: "GET", url: "sample.txt" },
//   { id: "getUsers", method: "GET", url: "users.json" },
//   {
//     id: "getPosts",
//     method: "GET",
//     url: "https://jsonplaceholder.typicode.com/posts"
//   },
//   {
//     id: "addPost",
//     method: "POST",
//     url: "https://jsonplaceholder.typicode.com/posts"
//   }
// ];

// requests.forEach(request => {
//   let { id, method, url } = request;
//   document.getElementById(id).addEventListener("click", () => {
//     process(id, method, url);
//   });
// });

// async function process(id, method, url) {
//   let title = document.querySelector("#title").value;
//   let body = document.querySelector("#body").value;
//   output.innerHTML = "loading...";
//   let { data } = await axios(url, {
//     method,
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json"
//     },
//     data:
//       method == "POST"
//         ? JSON.stringify({
//             title,
//             body
//           })
//         : null
//     //   params: id == "getPosts" ? { _limit: 3 } : null
//   });
//   switch (id) {
//     case "getText":
//       func1(data);
//       break;
//     case "getUsers":
//       func2(data);
//       break;
//     case "getPosts":
//       func3(data);
//       break;
//     case "addPost":
//       func4(data);
//       break;
//   }
// }

// let output = document.querySelector("#output");

// function func1(data) {
//   output.innerHTML = "<h1>Text</h1>" + data;
// }

// function func2(data) {
//   output.innerHTML = "<h1>Users</h1>";
//   data.forEach(item => {
//     let ol = document.createElement("ol");
//     Object.values(item).forEach(subItem => {
//       let li = document.createElement("li");
//       li.innerText = subItem;
//       ol.appendChild(li);
//     });
//     output.appendChild(ol);
//   });
// }

// function func3(data) {
//   let text = "";
//   data.forEach(item => {
//     text += `
//           <div>
//             <h3>${item.title}</h3>
//             <p>${item.body}</p>
//           </div>
//          `;
//   });
//   output.innerHTML = "<h1>Posts</h1>" + text;
// }

// function func4(data) {
//   console.log(data);
//   output.innerHTML = data.title + "<br/>" + data.body;
// }
