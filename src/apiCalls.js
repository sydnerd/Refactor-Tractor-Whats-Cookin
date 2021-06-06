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

const updatePantry = (endPoint, data) => {
  return fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error"))
}

export {
    fetchAllData,
    fetchIngredientsData,
    fetchRecipeData,
    fetchUserData,
    updatePantry
};
