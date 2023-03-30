
//Sidebar Open & Close

function w3_open() {

  let media_Nev = document.getElementById("def-nev");

  if(media_Nev.style.display === "flex"){
    media_Nev.style.display = "none";
  }
  else{
    media_Nev.style.display = "flex";
  }
  
}