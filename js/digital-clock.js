function startTime() {
  var today = new Date();
  //UTC is the coordinated universal time
  var h = today.getUTCHours();
  var m = today.getUTCMinutes();
  var s = today.getUTCSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500); //evaluates if the time is correct every 500ms
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}; //this adds a 0 before the minutes and seconds
  return i;
}

/*
window.onload = function(){
  startTime();
};

doesn't work because of the different js documents that'll overwrite each other
*/