//Navbar initialisation
const navbar = document.getElementById("topnav");

//Navbar toggle script (Esssentially just add the className in)
function navbarToggle() {
 if (navbar.className === "nav") {
  navbar.className += "responsive";
 } else {
  navbar.className = "nav";
 }
}