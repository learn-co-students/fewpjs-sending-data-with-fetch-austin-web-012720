// Add your code here
const body = document.querySelector('body');



function submitData(name, email) {


    const formData = {
        name: name,
        email: email
    };

    const configObject = {
        method: "POST",
        headers: {
            "content-type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify(formData)
    };

    let r = fetch("http://localhost:3000/users", configObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        body.innerHTML = object["id"]
    })
    .catch(function(error) {
        
        body.innerHTML = error.message
    });
    return r;
}