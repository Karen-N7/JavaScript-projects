var li = document.querySelectorAll('li');
var a = document.querySelectorAll('a');
var input = document.querySelector('input'); 
input.addEventListener('input', process);

function process() {
    var inputValue = input.value.toUpperCase();
    for (let i = 0; i < li.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(inputValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

