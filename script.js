// Always set headers and stringify the body


fetch('https://reqres.in/api/users/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1',

    })
})
    .then(res => res.json())
    .then(data => console.log(data))
