 let add = document.querySelector('.btn');
let inp = document.querySelector('#new input');

add.addEventListener("click",
() =>{
 if(inp.value.length == 0){
  document.getElementById('warn').innerText = `Input Field Cannot Be Empty!`
 }
 else{
  document.getElementById('warn').innerText = "";
  
  let list = document.getElementById('tasks');
  let li = document.createElement('li');
  li.innerHTML = `${inp.value} <button class="btn btn-warning">Delete</button>`;
  list.appendChild(li);
  inp.value = "";
 }
})

document.querySelector('ul').addEventListener("click", function(e) {
 let task = document.getElementById('tasks');
 let li = e.target.parentNode;
 task.removeChild(li);
})



