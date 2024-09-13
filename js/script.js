//! Mobile Menu //
function toggleMenu() {
  document.getElementById("side_menu").classList.toggle("nav_container--nav--menu_mobile--toggle");
  document.getElementById("overlay").classList.toggle("toggle");
}

//! Contact Send Mail //
function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  // https://formspree.io/f/mqazbyjw
  fetch("https://formspree.io/f/mqazbyjw", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "./send_mail.html";
    })
    .catch((error) => {
      console.log(error);
    });
}

//! Nav and Footer fetch )
fetch("./components/nav.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("nav").innerHTML = data));

fetch("./components/footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

//! Calculation recipe //
const ingredientsTable = document.getElementById("ingredientsTable");

let original_list;

if (ingredientsTable) {
  original_list = ingredientsTable.innerHTML;
}

let = errorMessage = "Bitte geben Sie eine gültige Portionsgröße ein (zwischen 1 und 10).";

if (ingredientsTable) {
  function CalculatePortions(event) {
    event.preventDefault();
    let value = document.getElementById("portions").value;
    document.getElementById("error-message").innerHTML = "";
    if (value < 1 || value > 10) {
      value = 1;
      document.getElementById("portions").value = 1;
      document.getElementById("error-message").innerHTML = errorMessage;
    }
    let new_list = original_list.replaceAll(/\d+/g, (match) => {
      return parseInt(match) * value;
    });
    document.getElementById("ingredientsTable").innerHTML = new_list;
  }
}
