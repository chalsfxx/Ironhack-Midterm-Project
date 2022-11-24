

let params = new URLSearchParams(location.search);

var postUrl = params.get("p");



const getPost = (post) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
    .then((response) => response.json())

    .then((res) => {
    

      document.querySelector(".txt-title").innerHTML += `<h1>${res.title}</h1>


   <div class="subtitle">


       <h2>${res.title}</h2>


       <h3>Completed on 2/2/22</h3>


   </div>


   <div class="img-container">


       <img src="./resources/images/projects-section/${res.id}.jpg" alt="">


   </div>


   <div class="txt-container">


       <p>${res.body}</p>


   </div>`;
    })

    .catch((error) => console.log(error));
};

getPost(postUrl);

const get3randomPosts = () => {

  let randomPosts = [];

  let imageRandomizer = [];

  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 100) + 1;

    while (randomPosts.indexOf(random) !== -1) {
      random = Math.floor(Math.random() * 100) + 1;
    }

    randomPosts.push(random);
  }

  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 6) + 1;

    while (imageRandomizer.indexOf(random) !== -1) {
      random = Math.floor(Math.random() * 6) + 1;
    }

    imageRandomizer.push(random);
  }

  console.log(randomPosts, imageRandomizer);


  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())

    .then((res) => {
      for (let i = 0; i < 3; i++) {
        document.querySelector(
          ".projects-container"
        ).innerHTML += `<div class="project">


           <img src="./resources/images/projects-section/${
             imageRandomizer[i]
           }.jpg" alt="">


           <h3>${res[randomPosts[i]].title}</h3>


           <p>${res[randomPosts[i]].body}</p>


           <a href="project.html?p=${res[randomPosts[i]].id}">Learn More</a>


           </div>`;
      }
    })

    .catch((error) => console.log(error));
};

window.addEventListener("load", get3randomPosts);
