
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


//  __{{__back Scroll__}}__

let ScrollButton = document.getElementById("ScrollButton");

window.onscroll = function() { Scroll() };

function Scroll() {
  if (document.documentElement.scrollTop > 45) {
    ScrollButton.style.display = "flex";
  }
  else {
    ScrollButton.style.display = "none";
  }
}

function Scroll_top() {
  document.documentElement.scrollTop = 0;
}


// ______{{  Dark Themes  }}______

let Dark = document.getElementById("dark");

Dark.onclick = function(){
  ToggleFunctuon();
}

function ToggleFunctuon(){
  document.body.classList.toggle("dark-mode");
  
  if(document.body.classList.contains("dark-mode")){
    Dark.innerHTML = "Dark";
  }
  else{
    Dark.innerHTML = "Lite";
  }
}