
console.log("hola");


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Simplify',
    body: '  Simplify is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus sem, id vulputate justo ornare non. Nullam et vehicula sem. Pellentesque bibendum massa non nisl posuere cursus. Aliquam ac eros pretium neque consequat facilisis. Ut sit amet justo varius ex ultrices fringilla. Sed vel turpis fringilla ante gravida vestibulum. Etiam a sollicitudin leo. Nunc metus lectus, lacinia ut arcu quis, pretium congue lacus,Aliquam blandit varius metus, in mattis orci convallis sit amet.',
    userId: 'Fusce et sem ac velit placerat ultrices in id dolor. Sed eget auctor metus. Sed suscipit fringilla lectus, a maximus justo bibendum a. Donec et pellentesque nisl, vitae tempus lorem. Sed efficitur cursus rhoncus. Duis placerat nisi quis mi tincidunt, sit amet tincidunt urna convallis. Nam et sagittis felis. Pellentesque placerat orci sodales nisi convallis ultrices. Nunc posuere neque eu mi imperdiet ullamcorper. Praesent tempor convallis rutrum. Vestibulum dignissim pellentesque eros in placerat. Etiam at nisi quis quam sollicitudin vehicula sit amet vel mi',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    document.querySelector('#title').innerHTML = json.title
    document.querySelector('#paragraph-one').innerHTML = json.body
    document.querySelector('#paragraph-two').innerHTML = json.userId
    console.log(json);
  })
  .catch((error) => console.log("error"));
   

document.querySelector('#form').onSubmit = (e) => {
  e.preventDefault();
   let name = document.querySelector("#name").value;

  let email = document.querySelector("#email").value;

 let phone = document.querySelector("#phone").value;

  let message = document.querySelector("#message").value;
  if (name === "" || message === "") {
    alert("Make sure the form is completed")
    
  } else (console.log('${name} registrado'));
}

    