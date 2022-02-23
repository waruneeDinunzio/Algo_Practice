// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/users");
// request.send();
// request.onload = () => {
//     if (request.status === 200) {
//         console.log(JSON.parse(request.response));
//     } else {
//         console.log(`error ${request.status}`)
//     }
// }

// use fetch()
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        console.log(users)
    })

// second approach
async function getUser(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;

}
getUser().then(response=>{console.log(response)})

// axios- third party javaScript llibrary
// goto  axios to get link's file, then put on top of the js script file in html file
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        console.log(response.data);
    })
    .catch(console.error(error));