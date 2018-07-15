fetch("http://localhost:5000/", { method: "post", })
    .then(responce => {
        let waitData = responce.json();
        waitData.then(data => {
            console.log(data);
        })
    })