const inputAdd = document.getElementById("addTask");
const inputSearch = document.getElementById("searchTask");
const tasks = document.querySelector(".tasks");
const completed = document.querySelectorAll(".fa-square-check");
const list = [];

//Search Events
inputSearch.addEventListener("keyup", (e) => {
  const val = e.target.value;
  valFilter(val);
});

const valFilter = (value) => {
  Array.from(tasks.children).forEach((e) => {
    if (!e.textContent.includes(value)) {
      e.classList.add("hidden");
    }
  });

  Array.from(tasks.children).forEach((e) => {
    if (e.textContent.includes(value)) {
      e.classList.remove("hidden");
    }
  });
};

// Add Events
tasks.addEventListener("click", (e) => {
  clickIconsEvent(e);
});

inputAdd.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    additemToarray();
    array();
    inputAdd.value = "";
  }
});

const clickIconsEvent = (e) => {
  if (e.target.classList == "fa-solid fa-trash") {
    trashIconClick(e);
  } else if (e.target.classList == "fa-solid fa-square-check") {
    checkIconClick(e);
  }
};
const checkIconClick = (e) => {
  e.target.parentElement.childNodes[1].classList.toggle("ok");
  e.target.parentElement.classList.toggle("completed");
};
const trashIconClick = (e) => {
  e.target.parentElement.classList.add("remove");
  setTimeout(() => {
    e.target.parentElement.remove();
  }, 1000);
};
const additemToarray = () => {
  inputControl();
};
const inputControl = () => {
  const val = inputAdd.value;
  if (val.length != 0) {
    list.push(inputAdd.value);
  } else {
    alert("Add Task Name");
  }
};
const array = () => {
  let html = "";
  list.forEach((e) => {
    html += ` <li class="task"><i class="fa-solid fa-square-check"></i><p>${e}</p><i class="fa-solid fa-trash"></i></li>`;
  });
  tasks.innerHTML = html;
};
