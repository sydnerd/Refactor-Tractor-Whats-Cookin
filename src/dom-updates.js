import User from './user';

let domUpdates = {
  generateUser(userData) {
    console.log(userData)
    let user = new User(userData[Math.floor(Math.random() * userData.length)]);
    let firstName = user.name.split(" ")[0];
    let welcomeMsg = `
      <div class="welcome-msg">
        <h1>Welcome ${firstName}!</h1>
      </div>`;
    document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
      welcomeMsg);
  }
}

export default domUpdates;
