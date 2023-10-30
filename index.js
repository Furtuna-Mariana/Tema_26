// const postContainer  = document.createElement('div');
// document.body.appendChild(postContainer);

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(reponse => reponse.json())
// .then(posts => {
//     posts.slice(0, 15).forEach(post => {
//         const postElement = document.createElement('div');
//         postElement.innerHTML = `
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//         `;

        
//         postContainer.appendChild(postElement);
//     });
// })

// .catch(error => {
//     console.log('Eroare:', error);
// })






// fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
// .then((res) => res.json())
// .then((data) => console.log(data))


fetch('https://jsonplaceholder.typicode.com/posts?_limit=15', {
method: 'POST',
body: JSON.stringify({
    title: 'test',
    body: 'body'
}),
headers: {
    'Content-type': 'application/json; charset=UTF-8',
}
})
.then((res) => res.json())
.then((data) => console.log(data))







// fetch('https://jsonplaceholder.typicode.com/posts/1', {
// method: 'PUT',
// body: JSON.stringify({
//     title: 'test',
//     body: 'body'
// }),
// headers: {
//     'Content-type': 'application/json; charset=UTF-8',
// }
// })
// .then((res) => res.json())
// .then((data) => console.log(data))





// fetch('https://jsonplaceholder.typicode.com/posts/1', {
// method: 'DELETE',
// })
// .then((res) => res.json())
// .then((data) => console.log(data))