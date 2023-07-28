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


function updateUserData() {
  
  const name = getCookie("name");
  const gender = getCookie("gender");
  let visits = parseInt(getCookie("visits")) || 0;
  const favoriteColor = getCookie("color");

  visits++;
  document.cookie = "visits=" + visits + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";

  // Display the user information and welcome message with the favorite color
  const userDataDiv = document.getElementById("userData");
  userDataDiv.innerHTML = `Welcome <span style="color: ${favoriteColor};">${name}</span>! You have visited this site <span style="color: ${favoriteColor};">${visits}</span> time(s).`;


  const genderImage = document.createElement("img");
  genderImage.src = gender === "male" ? "./1.jpg" : "./22.jpg";
  genderImage.alt = "Gender Image";
  genderImage.width = 200;
  genderImage.height = 200;
  userDataDiv.appendChild(genderImage);
}

// Call the updateUserData function when the second page loads
window.addEventListener("load", updateUserData);
