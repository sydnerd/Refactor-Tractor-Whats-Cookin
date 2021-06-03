export const fetchApiData = () => {
    return fetch('http://localhost:3001/api/v1/ingredients')
        .then(response => response.json())
        // .catch(err => console.log("API error"))
}