const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value;
    const comments = document.getElementById("comments").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("countryError").textContent = "";
    document.getElementById("commentsError").textContent = "";

    let isValid = true;

    if (fullName === "") {
      document.getElementById("nameError").textContent = "Please enter your full name.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Please enter your email address.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (country === "") {
      document.getElementById("countryError").textContent = "Please select your country.";
      isValid = false;
    }

    if (comments === "") {
      document.getElementById("commentsError").textContent = "Please write your comments.";
      isValid = false;
    }

    if (isValid) {
      alert("Your form has been submitted successfully!");
      contactForm.reset();
    }
  });
}
