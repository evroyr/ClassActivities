// add an event listener to the dog picture that listens for a "click" and gives an alert
document.getElementById('#dogpicture')
addEventListener("click", (event)) {
  console.log("navbar has been clicked");
}

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document.querySelectorAll("#class-schedule-list li")
    .addEventListener("mouseover" , (event) event.target.style.background = "red")


// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener("keyup" , (event) {
  console.log(event.target);
  console.log('the ${event.key} was pressed');
}
