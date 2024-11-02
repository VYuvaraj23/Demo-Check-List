isModelOpen = false;

const modelOpener = document.querySelector('#modelOpener');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#myList');
const model = document.querySelector('#model');
const inputLi = document.querySelector('#inputLi');
const mainSection = document.querySelector('#mainSection');
// mainSection.style.display = "block";
model.style.display = "none";

modelOpener.onclick = () => {
  toggleModel();
};

function toggleModel() {
  inputLi.value = "";  // Clear the input field after adding an item to the list.
  isModelOpen = !isModelOpen;
  if (isModelOpen) {
    model.style.display = "flex";
    mainSection.style.display= "none";

  }
  else {
    model.style.display = "none";
    mainSection.style.display= "block";

  }
}

addBtn.onclick = () => {
  if (inputLi.value === "" || inputLi.value === null) {
    alert("Please enter a value.");
    return;  // Exit the function if the input field is empty.
  }
  else {
    const li = document.createElement("li");
    const p = document.createElement("span");
    const delBtn = document.createElement("button");
    
    delBtn.onclick = () => {
      list.removeChild(li);
    };
    
    p.textContent = inputLi.value;
    delBtn.textContent = "X";
    delBtn.className="bg-red-500 text-white px-2 rounded-full w-6 h-5 text-xs ml-3"
    li.appendChild(p);
    li.appendChild(delBtn);
    list.appendChild(li);
    console.log(inputLi.value);
    mainSection.style.display = "block";
  }
  toggleModel();
}