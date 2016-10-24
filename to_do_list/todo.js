
window.onload = function() {


  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    var input = document.getElementById("todo-input").value;
    var list = document.createElement("li");
    var text = document.createTextNode(input);
    list.appendChild(text);
    document.getElementById("lista").appendChild(list);
    document.getElementById("todo-input").value = "";

  
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    var list = document.getElementById("lista")
    var element = list.firstElementChild
  
    var listaTerminada = document.querySelector(".done-list-items")
    listaTerminada.appendChild(element);

    element.classList.add("done");
  }
  
}