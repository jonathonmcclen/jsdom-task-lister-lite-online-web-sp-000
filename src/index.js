document.addEventListener("DOMContentLoaded", () => {
  
  
  
});


let input

function submit(){
  let input = document.getElementById("new-task-description").value
  document.getElementById("new-task-description").value = ""
}

function addListItem(){
  document.createElement
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




