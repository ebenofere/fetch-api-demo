// const container = document.querySelector("container");

// using Fetch API
async function getUsers() {
  let url = "profile.json";

  try {
    let res = await fetch(url);
    console.log(res, "response");
    res.ok ? console.log("Success") : console.log("Not Successful");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  console.log(users, "users");

  let html = "";

  users.forEach((user) => {
    let htmlSegment = `<div class="user">
                            <img src="${user.profileURL}" class="myImage">
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <div class="email">
                                <a href="email:${user.email}" class="userEmail">${user.email}</a>
                            </div>
                        </div>`;

    html += htmlSegment;
  });

  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderUsers();
