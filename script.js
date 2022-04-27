const inputAdd = document.getElementById("addTask");
const tasks = document.querySelector(".tasks");
const completed = document.querySelectorAll(".fa-square-check");
const list = []


tasks.addEventListener("click" , (e) => {
  if(e.target.classList == "fa-solid fa-trash"){
    e.target.parentElement.classList.add("remove")
    setTimeout(()=> {
      e.target.parentElement.remove() 
    },1000)
  }else if(e.target.classList == "fa-solid fa-square-check"){
    e.target.parentElement.childNodes[1].classList.toggle("ok")
  }
})

inputAdd.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    additemToarray();
    array();
  }
});

const additemToarray = () => {
 list.push(inputAdd.value);
};
const array = () => {
  let html = "";
  list.forEach((e) => {
    html += ` <li class="task"><i class="fa-solid fa-square-check"></i><p>${e}</p><i class="fa-solid fa-trash"></i></li>`;
  });
  tasks.innerHTML = html;
};
