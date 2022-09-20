/* С помощью метода map массива data получите массив размеченных данных. 
Например, объекту
{
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
}
Должна соответствовать строка 
`<div class="card card-user">
  <img src="https://reqres.in/img/faces/7-image.jpg" alt="Michael Lawson">
  <h2>Michael Lawson</h2>
  <p>Email: <a href="mailto:michael.lawson@reqres.in">michael.lawson@reqres.in</a></p>
  <p><a href="/user/7">Подробней</a></p>
</div>`
*/

const data = [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ]
	
marr = data.map( user=>`<div class="card card-user">
    <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
    <h2>${user.first_name} ${user.last_name}</h2>
    <p>Email: <a href="mailto:${user.email}">${user.email}</a></p>
    <p><a href="/user/${user.id}">Подробней</a></p>
  </div>`);

document.write(marr.join(''));