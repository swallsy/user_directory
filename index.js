const express = require('express');
const app = express();
const data = require('./data.js');
const mustacheExpress = require('mustache-express');

app.use(express.static('public'))
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

let htmlData = "";
let users = data.users;

// For the Index Page //
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  if (user.job === null) {
    markup =
      `
        <div class="user-wrapper">
          <a class="user" href="/user/${user.id}">
            <div class="img-wrapper">
              <img src="${user.avatar}"></img>
            </a>
            <h1>${user.name}</h1>
            <p style="color:#B20000;">Available for hire</p>
          </div>
        </div>
      `
      htmlData += markup;
  } else {
  markup =
    `
      <div class="user-wrapper">
        <a class="user" href="/user/${user.id}">
          <div class="img-wrapper">
            <img src="${user.avatar}"></img>
          </div>
          <h1>${user.name}</h1>
          <p> ${user.job}, ${user.company}</p>
        </a>
      </div>
    `
    htmlData += markup;
  }
}

// for the user page //


app.get('/', function (req, res) {
  res.render('index', {listMarkup: htmlData})
})

app.get('/user/`${user.id}`', function (req, res){
  res.render('index', {listMarkup: htmlData})
})

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
