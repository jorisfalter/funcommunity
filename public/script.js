document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to a server
    alert("Thanks for joining our community!");
  });
