const btn = document.getElementById("btn");
const text = document.getElementById("users");
const clearBtn = document.getElementById("clearBtn");
const img = document.getElementById("img");

btn.addEventListener("click", loadUsers);
// window.addEventListener("load", loadUsers);
clearBtn.addEventListener("click", () => {
  text.innerHTML = "";
  text.appendChild(img);
});

function loadUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://api.github.com/users", true);
  xhr.onload = () => {
    text.innerHTML = "";
    let users = JSON.parse(xhr.responseText);
    console.log(users);
    let output = "";
    users.forEach(value => {
      output += `
            <div class='user'>              
              <img src="${value.avatar_url}" width='70px' height='70px'></img>
              <ul><a href="${value.html_url}" target="_blank">
                <li>Id: ${value.id}</li>
                <li>Login: ${value.login}</li>
                </a>
              </ul>              
            </div>        
            `;
    });
    text.innerHTML += output;
  };
  xhr.send();
}
