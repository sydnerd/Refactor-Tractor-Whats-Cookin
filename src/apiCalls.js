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


export {
    fetchAllData,
    fetchIngredientsData,
    fetchRecipeData,
    fetchUserData,
};