let listContainer = document.querySelector(".listContainer");
const groceryIn = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
let statusBtn = document.querySelector(".checkBtn");
let groceryList = [];
statusBtn = false;

function List(item, completed) {
  this.item = item;
  this.completed = completed;
}

function getInput() {
  let item = groceryIn.value;
  let completed = statusBtn;
  let newGrocery = new List(item, completed);
  groceryList.push(newGrocery);
  console.log(newGrocery);
}

function displayList() {
  listContainer.innerHTML = "";

  for (let i = 0; i < groceryList.length; i++) {
    let itemT = groceryList[i].item;
    console.log(groceryList[i]);

    let listDiv = document.createElement("div");
    let listText = document.createElement("ol");
    const deleteBtn = document.createElement("button");
    const checkBtn = document.createElement("div");
    const buttonDiv = document.createElement("div");

    listText.innerHTML = itemT;
    listText.classList += "listText";
    listDiv.classList += "listDiv";
    deleteBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    deleteBtn.classList += "deleteBtn";
    checkBtn.classList += "checkBtn";

    listDiv.appendChild(listText);
    listContainer.appendChild(listDiv);
    buttonDiv.appendChild(deleteBtn);
    buttonDiv.appendChild(checkBtn);
    listDiv.appendChild(buttonDiv);

    listText.addEventListener("click", () => {
      if (!groceryList[i].completed) {
        listText.style.textDecoration = "line-through";
        listText.style.opacity = 0.5;
        groceryList[i].completed = true;
      } else {
        listText.style.textDecoration = "none";
        listText.style.opacity = 1;
        groceryList[i].completed = false;
      }
    });

    if (groceryList[i].completed) {
      listText.style.textDecoration = "line-through";
      listText.style.opacity = 0.5;
    } else {
      listText.style.textDecoration = "none";
      listText.style.opacity = 1;
    }

    deleteBtn.addEventListener("click", () => {
      listContainer.removeChild(listDiv);
      groceryList.splice(listDiv, 1)
    })
  }
}

addBtn.addEventListener("click", () => {
  getInput();
  displayList();
  console.log(groceryList.length);
});
