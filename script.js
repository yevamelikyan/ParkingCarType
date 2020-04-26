function getRndInteger(min, max) {
   var spotNumber = Math.floor(Math.random() * (max - min)) + min;
   document.getElementById('getRndInteger').innerHTML = spotNumber;
}

