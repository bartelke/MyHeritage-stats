document.addEventListener("DOMContentLoaded", async () => {
  // let data = window.api.getData();

  // let div = document.getElementById("familyData");
  // let dataString = data.join("<br />");
  // div.innerHTML = dataString;

  let names = window.api.getNamesRepetition();
  console.log(names);
});
