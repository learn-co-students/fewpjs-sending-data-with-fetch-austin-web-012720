// // Add your code here
// const configurationObject = {
//   method: "POST"
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Bryon",
//     dogBreed: "Poodle"
//   })
// };
// fetch("http://localhost:3000/users", configurationObject)


function submitData(uName,uEmail){
  let formData = {
    name: uName,
    email: uEmail
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json()
    })
    .then(function(object) {
    document.body.innerHTML = object[ "id" ]
    })
    .catch(function(error) {

    document.body.innerHTML = error.message
  });

}
