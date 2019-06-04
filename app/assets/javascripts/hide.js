

// function hideWhenClicked() {
//   document.getElementById("hide_this").addEventListener("click", function(){ alert("Hello World!")
//   })
// }

function hideWhenClicked(event) {
  const $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);
