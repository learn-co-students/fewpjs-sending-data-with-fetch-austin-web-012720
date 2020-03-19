// Add your code
submitData('ben', 'ben@ben.ben');
function submitData(name, email){
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(
    {
      name: name,
      email: email
    })
  })
    .then(function(response){
      return response.json();
    })
    .then(function(object){
      console.log(object);
      document.body.innerHTML = object["id"];
    })
    .catch(function(error){
      document.body.innerHTML = error.message;
    });
}
// //create body of configurationObject (ie formData)
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
// //create configurationObject
// let configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
// // fetch(destinationURL, configurationObject);
// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(object){
//     console.log(object);
//   })
//   .catch(function(error){
//     alert("Bad things! Ragnarok!");
//     console.log(error.message);
//   });
