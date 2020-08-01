console.log("TO do list");

const button =document.querySelector('#btn');
const list =document.querySelector("#list")

button.onclick = function(button){
let item = document.querySelector("#todo").value;
let text =document.createTextNode(item);
let listItem = document.createElement('li');
listItem.appendChild(text);
list.appendChild(listItem);
document.forms.myForm.reset();
}
// button.addEventListener('click',function(){

// })