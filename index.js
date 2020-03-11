// // Add your code here

// function submitData(user_name, user_email){
        
//     let formData = {
//                 userName: user_name,
//                 userEmail: user_email
//     }    

//     configObject = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(formData) 
//     };

//     fetch("http://localhost:3000/users", configObject)
//     .then(function(response){
//         console.log("eomthing is happening")
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });
// }


function submitData(name, data){

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function (obect){
        document.body.innerHTML = object["id"]
    })
    .catch(function(error){
        document.body.innerHTML = error.message
    })
}



// submitData("tiny tim", "T@email.fred");
// 
// function submitData( name, email ) {
//     return fetch( 'http://localhost:3000/users', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify( {
//           name,
//           email
//         } )
//       } )
//       .then( function ( response ) {
//         return response.json()
//       } )
//       .then( function ( object ) {
//         document.body.innerHTML = object[ "id" ]
//       } )
//       .catch( function ( error ) {
//         document.body.innerHTML = error.message
//       } )
//   }