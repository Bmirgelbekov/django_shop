async function sendPostRequest(url, data){
    return await fetch(
        url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    .then(response => response.json())
    .catch((error) => {console.error(error)})
}


sendPostRequest(
    'http://127.0.0.1:8000/auth/users/activation/',
    {
        uid: "NQ",
        token: "bmnh2y-db1f5eb2a9fdc74eee20a8ab92187145"
    }
)