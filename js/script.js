let inp1 = document.querySelector(".inp1");
let btnClose = document.querySelector(".bi");
let btnCreate = document.querySelector(".wrapperbtn");
let listBox = document.querySelector(".list");
let deleteBtmel = document.querySelector(".btndelete");

btnClose.addEventListener("click", () => {
 inp1.value = "";
});

btnCreate.addEventListener("click", (e) => {
e.preventDefault();
 const listTwo = document.createElement("div");
 listTwo.className = "listbox";
 listTwo.innerText = inp1.value;
 listBox.prepend(listTwo);
 inp1.value = "";
})

deleteBtmel.addEventListener("click", () => {
  listBox.style.display = "none";
  document.location.reload();
})
