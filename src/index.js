document.addEventListener("DOMContentLoaded", () => {
  
  
  
});


let input

function submit(){
  let input = document.getElementById("new-task-description").value
  addListItem(input)
  document.getElementById("new-task-description").value = ""
}

function addListItem(input){
  
  new_item = document.createElement(p);
  new_item.innerHTML = input
  document.getElementById("task").appendChild(new_item);
  
}

document.querySelector("form").addEventListener("submit", function(event) {
  submit();
  event.preventDefault();
}, false);

document.addEventListener("keydown",event => {
  
  if (event.keyCode === 13) {
    submit();
  }
  
});




