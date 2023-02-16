const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();

    return data;
};

getUsers().then((data) => {
    let usersArr = data.data;
    const outerContainer = document.querySelector(".users");
  
    usersArr.forEach((user) => {
      let userContainer = document.createElement("div");
      userContainer.classList.add("userContainer");
      userContainer.innerHTML = 
      `
      <div class="imgContainer">
            <img
              src="${user.avatar}"
              alt="${user.first_name + " " + user.last_name}"
            />
          </div>
          <div class="NameContainer">${
            user.first_name + " " + user.last_name
          }</div>
          <div class="email">${user.avatar}</div>
          `;
  
      outerContainer.append(userContainer);
    });
  });
  
  getUsersPromise().catch((err) => {
    const outerContainer = document.querySelector(".users");
    outerContainer.innerHTML =
      "<h1>Sorry Failed to connect check console please</h1>";
    console.log("Rejected ", err);
  });