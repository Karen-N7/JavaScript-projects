// var animalContainer = document.createElement('div');
// document.body.appendChild(animalContainer);
// var btn = document.createElement('button');
// document.body.insertBefore(btn, animalContainer);
// btn.style.height = '25px'

// var pageCounter = 1;
// btn.addEventListener('click', () => {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
//     xhr.onload = function() {
//         if (xhr.status >= 200 && xhr.status < 400) {
//             var ourData = JSON.parse(xhr.responseText);
//             renderHTML(ourData);
//         } else {
//             alert('we connected to the server but it returns error')
//         }
//     }
//     xhr.onerror = function() {
//         alert('connection error');
//     }
//     xhr.send();
//     pageCounter++;
//     if (pageCounter > 3) {
//         btn.style.display = 'none'
//     }
// });

// function renderHTML(data) {
//     var htmlString = '';
//     data.forEach(item => {
//         htmlString += `<p>${item.name} is a ${item.species} and he like to eat`;
//         item.foods.likes.forEach((itemLike, index) => {
//             if (index == 0) {
//                 htmlString += ` ${itemLike}`;
//             } else {
//                 htmlString += ` and ${itemLike}`;
//             }
//         });
//         htmlString += `, he dislike`;
//         item.foods.dislikes.forEach((itemDislike, index) => {
//             if (index == 0) {
//                 htmlString += ` ${itemDislike}`;
//             } else {
//                 htmlString += ` and ${itemDislike}`;
//             }
//         });
//         htmlString += `</p>`;
//     });
//     animalContainer.insertAdjacentHTML('beforeend', htmlString);
// }

let button = document.body.appendChild(document.createElement("button"));
button.innerText = "click";
button.addEventListener("click", process);

let index = 1;

async function process() {
  try {
    let { data } = await axios.get(
      `https://learnwebcode.sgithub.io/json-example/animals-${index++}.json`
    );
    if (index > 3) button.style.display = "none";
    init(data);
  } catch (err) {
    console.log(err.message);
  }
}

function init(data) {
  data.forEach((item, index) => {
    let text = `${item.name} is a ${item.species}`;
    item.foods.likes.forEach((item, index) => {
      index === 0
        ? (text += ` and he like to eat ${item}`)
        : (text += ` and ${item}`);
    });
    item.foods.dislikes.forEach((item, index) => {
      index === 0 ? (text += `, he dislike ${item}`) : (text += ` and ${item}`);
    });
    let p = document.body.appendChild(document.createElement("p"));
    p.innerHTML = index !== 2 ? text : text + "<hr>";
  });
}
