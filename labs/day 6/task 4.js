function getUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      displayUsers(users);
    }
  };

  xhr.onerror = function() {
    console.error("Error fetching data");
  };

  xhr.send();
}


function displayUsers(users) {
  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = ""; 

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = user.id;

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(emailCell);

    tbody.appendChild(row);
  }
}


const getUserDataButton = document.getElementById("getUserDataButton");
getUserDataButton.addEventListener("click", function() {
  getUsers();
  
});
