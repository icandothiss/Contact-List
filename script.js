const searchBar = document.getElementById("filterInput");
const names = document.getElementById("names");

//event listeners
searchBar.addEventListener("keyup", filterContacts);

//functions
function filterContacts(e) {
  let name = Array.from(names.children);
  let result = name.filter((word) => word.className === "collection-item");
  for (let i = 0; i < searchBar.value.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (
        !result[j].innerText
          .toLowerCase()
          .includes(searchBar.value[i].toLowerCase())
      ) {
        result[j].classList.add("hidden");
      }
    }
  }
  for (let i = 0; i < name.length; i++) {
    if (e.keyCode === 8) {
      if (name[i].classList.contains("hidden")) {
        name[i].classList.remove("hidden");
        for (let j = 0; j < searchBar.value.length; j++) {
          console.log(name[i]);
        }
      }
    }
  }
  for (let i = 0; i < searchBar.value.length; i++) {
    for (let j = 0; j < name.length; j++) {
      if (
        !name[j].innerText
          .toLowerCase()
          .includes(searchBar.value[i].toLowerCase()) &&
        name[j].classList.contains("collection-item")
      ) {
        name[j].classList.add("hidden");
      }
    }
  }
}
