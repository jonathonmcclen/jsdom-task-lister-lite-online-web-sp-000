document.addEventListener("DOMContentLoaded", () => {
  
  
  
});


let input

function submit(){
  
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("keydown",event => {
  
  if (event.keyCode === 13) {
    let input = document.getElementById("new-task-description").value
    document.getElementById("new-task-description").value = ""
  }
  
});




