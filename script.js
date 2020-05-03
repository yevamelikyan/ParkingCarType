function getRndInteger (min, max) {
   var spotNumber = Math.floor(Math.random() * (max - min)) + min;
   document.getElementById('getRndInteger').innerHTML = spotNumber;
}  
 
function sendInput() {
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  if (name == "" || surname == "") {
  alert("Please Fill in Your Name"); 
  }
  else { 
  sessionStorage.setItem('name', name);
  sessionStorage.setItem('surname', surname);
  window.location = 'app.html'; 
  }
}
  
