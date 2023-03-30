//Sidebar Open & Close

function w3_open() {

  var media_Nev = document.getElementById("def-nev");

  if (media_Nev.style.display === "none") {
    media_Nev.style.display = "flex";
  }
  else {
    media_Nev.style.display = "none";
  }

}