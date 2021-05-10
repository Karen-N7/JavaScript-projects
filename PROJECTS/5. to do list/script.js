var clear = document.querySelector('.clear');
var date = document.querySelector('#date');
var list = document.querySelector('#list');
var input = document.querySelector('input');

var today = new Date();

date.innerHTML = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
});

const CHECKED = 'fa-check-circle';
const UNCHECKED = 'fa-circle-thin';
const LINE = 'lineThrough';

var LIST, id;
let data = sessionStorage.getItem('TODO');
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else {
    LIST = [];
    id = 0;
}

function loadList(array) {
    array.forEach((item) => {
        let { name, id, done, trash } = item;
        addToDo(name, id, done, trash);
    });
}

function addToDo(toDo, id, done, trash) {
    if (trash) {
        return;
    }
    const DONE = done ? CHECKED : UNCHECKED;
    const LINE = done ? LINE : '';
    var item = `
                <li class='item'>
                    <i class='fa ${DONE}' id='${id}' job='complete'></i>
                    <p class='${LINE}'>${toDo}</p>
                    <i class='fa fa-trash-o' id='${id}' job='delete'></i>
                </li>
               `;
    list.insertAdjacentHTML('beforeend', item);
}

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 13 || e.which == 13) {
        var toDo = input.value;
        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false,
            });
            sessionStorage.setItem('TODO', JSON.stringify(LIST));
            id++;
            input.value = '';
        }
    }
});

function completeAddToDo(element) {
    element.classList.toggle(CHECKED);
    element.classList.toggle(UNCHECKED);
    element.parentNode.querySelector('p').classList.toggle(LINE);
    // LIST[element.id].done = LIST[element.id].done ? false : true;
    LIST[element.id].done = !LIST[element.id].done;
}

function removeAddToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode); //element.parentNode.remove();
    LIST[element.id].trash = true;
    // LIST.forEach((item,index)=>{
    //     if(item.id == element.id)
    //     LIST.splice(index,1)
    // })
    // LIST.splice(element.id,1)
}

list.addEventListener('click', (e) => {
    var element = e.target;
    var elementJob = element.attributes.job;
    if (elementJob) {
        if (elementJob.value == 'complete') {
            completeAddToDo(element);
        } else if (elementJob.value == 'delete') {
            removeAddToDo(element);
        }
    }

    sessionStorage.setItem('TODO', JSON.stringify(LIST));
});

clear.addEventListener('click', () => {
    sessionStorage.clear();
    location.reload();
});
