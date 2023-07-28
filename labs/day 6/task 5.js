// Function to set a cookie
function setCookie(cookieName, cookieValue) {
  document.cookie = cookieName + "=" + cookieValue + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

// Function to get a cookie value
function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const color = document.getElementById("color").value;

  // Save user information using cookies
  setCookie("name", name);
  setCookie("age", age);
  setCookie("gender", gender);
  setCookie("color", color);

  // Redirect to the second page
  window.location.href = "second_page.html";
}

// Add event listener to the form submission
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", handleSubmit);
