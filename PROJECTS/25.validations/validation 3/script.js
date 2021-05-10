var div = document.body.appendChild(document.createElement("div"));
div.style.cssText =
  "width: 400px;margin: 50px auto;\
border: 1px solid #444;padding: 10px;border-radius: 10px;";

var image = div.appendChild(document.createElement("img"));
image.src = "img/avatar.png";
image.style.cssText = `width: 150px; margin: 0 auto;
display: block;margin-bottom: 20px;`;

var inputStyle = {
  display: "block",
  height: "50px",
  width: "100%",
  marginBottom: "20px",
  fontSize: "22px",
  boxSizing: "border-box",
  border: "1px solid #444",
  outline: "none"
};
var buttonStyle = {
  display: "block",
  padding: "20px",
  border: "1px solid #444",
  background: "#000",
  color: "#fff",
  borderRadius: "50%",
  cursor: "pointer"
};

let inputs = ["login", "password"];
let obj = {};

inputs.forEach(input => {
    obj[input] = div.appendChild(document.createElement("input"));
    obj[input].type = input === "login" ? "text" : "password";
    obj[input].id = input
    Object.assign(obj[input].style, inputStyle);
});

// let { login, password } = obj;

let button = div.appendChild(document.createElement('button'))
button.innerHTML = '<b>submit</b>'
Object.assign(button.style,buttonStyle)
button.addEventListener('click',()=>{
    document.querySelectorAll('input').forEach(input=>{
        process(input)
    })
})



let messageContainer = document.body.appendChild(document.createElement('p'))
let messages = [];
function process(input) {
  if(input.id == 'login') messages = []
  if (!input.value) {
      messages.push(input.id+" can't be blank");
      input.style.borderColor = "red";
  }
  if (input.value.length > 8) {
    messages.push(input.id +" is too long");
    input.style.borderColor = "red";
  }
  if (!messages.length) {
    input.style.borderColor = "green";
  }
  messageContainer.innerHTML = messages.join(', ')
}
