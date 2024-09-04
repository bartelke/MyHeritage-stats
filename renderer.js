document.addEventListener("DOMContentLoaded", async () => {
  let data = window.api.getNames();

  let div = document.getElementById("familyData");
  let dataString = data.join("<br />");
  div.innerHTML = dataString;
});
