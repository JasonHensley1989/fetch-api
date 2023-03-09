fetch('https://reqres.in/api/users/')
    .then(res => {res.json()
        if(res.ok){
            console.log("Success");
        } else {
            console.log("Not successful");
        }
    })
    .then(data => console.log(data))
