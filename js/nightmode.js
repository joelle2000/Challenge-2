function dayCycle(){
  var today = new Date();
  //UTC is the coordinated universal time
  var h = today.getUTCHours();
  if (h > 8 && h < 20){
    document.getElementById("body").setAttribute("style", "color: #000000; background-color: #e0e0e0;"); 
    //if it's after 8am AND before 20pm it will be light mode
  }
  else{
    document.getElementById("body").setAttribute("style", "color: #ffffff; background-color: #21272b;");
    //if it's before 8am or after 20pm it will be dark mode
  }
  var t = setTimeout(dayCycle, 500); //evaluates if the if-statement is correct every 500ms
}

/*
window.onload = function(){
  dayCycle();
};

doesn't work because of the different js documents that'll overwrite each other
*/