
/*side bar*/
function showSideBar() {
 document.querySelector(".ham-menu").classList.add("active");
}
function hideSideBar() {
document.querySelector(".ham-menu").classList.remove("active");
}

/*zoom image
function zoomImage(element) {
  element.classList.toggle("zoomed");
}*/
/* view project page*/
const projectBtn = document.getElementById("project-btn");
projectBtn.addEventListener("click", () => {
  window.location.href = "projects.html";
});

/* view more about me*/
/*const button = document.getElementById("more-btn");
button.addEventListener("click", () => {
  button.style.color = "lightblue";
  alert(
    " An independent pulmonology clinical technologist with extensive experience in lung function testing and working with advanced diagnostic equipment and software.\nThis background has fostered strong analytical thinking,precision, and problem-solving skills that translate well into software development. \n\nCurrently studying front-end web development, with a passion for building intuitive, user-friendly applications that create real-world impact.\n\nSeeking a junior software developer role to combine healthcare expertise with emerging technical skills, bringing curiosity, creativity, and a strong desire to learn and grow within a collaborative team.",
  );
  
});*/
// Get references to the dialog and buttons
const customDialog = document.getElementById("customDialog");
const showButton = document.getElementById("more-btn");
const cancelButton = document.getElementById("cancelButton");

// Add an event listener to the show button to open the dialog
showButton.addEventListener("click", () => {
  // Use showModal() for a modal dialog that traps focus and has a backdrop
  customDialog.showModal();
});

// Add an event listener to the confirm button to close the dialog and log an action
confirmButton.addEventListener("click", () => {
  customDialog.close();
});


