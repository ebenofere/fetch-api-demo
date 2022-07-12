// using Fetch API - GET REQUEST
async function getUsers() {
  fetch("profile.json")
    .then((response) => {
      console.log(response, "resolved");

      response.ok ? console.log("Success") : console.log("Not Successful");

      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error, "rejected");
    });
}



// using Fetch API - POST REQUEST
fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "User 1" }),
})
  .then((response) => {
    console.log(response, "resolved");
    {
      response.ok ? console.log("Success") : console.log("Not Succesful");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error, "rejected");
  });
