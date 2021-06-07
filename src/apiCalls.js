const fetchAllData = () => {
    const promises = [fetchIngredientsData(), fetchRecipeData(), fetchUserData()]
    return Promise.all(promises)
        .catch(error => console.log("ERROR"))
}

const fetchIngredientsData = () => {
    return fetch("http://localhost:3001/api/v1/ingredients")
        .then(response => response.json())
        .catch(err => console.log("ERROR"))
}

const fetchRecipeData = () => {
    return fetch("http://localhost:3001/api/v1/recipes")
        .then(response => response.json())
        .catch(err => console.log("ERROR"))
}

const fetchUserData = () => {
    let userPromise = fetch("http://localhost:3001/api/v1/users")
        .then(response => response.json())
        .catch(err => console.log("ERROR"))
    return userPromise
}

const postIng = (data) => {
  let updateData = fetch("http://localhost:3001/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userID: user.id,
      ingredientID: +ingredID,
      ingredientModification: +ingredMod}),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error"))
  return updateData;
}
//
// function adjustPantry(ingredID, ingredMod) {
//   fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       userID: user.id,
//       ingredientID: +ingredID,
//       ingredientModification: +ingredMod
//     })
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .then(hidePostForm())
//     .catch(error => console.log(error))
// }
//
// function hidePostForm() {
//   document.getElementById('post-to-pantry').style.display = 'none';
//
//   users = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
//     .then(response => response.json())
//     .catch(err => alert('Alert, something\'s wrong with your endpoint!', err.message));

export {
    fetchAllData,
    fetchIngredientsData,
    fetchRecipeData,
    fetchUserData,
    postIng
};
