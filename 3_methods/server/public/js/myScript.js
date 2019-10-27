let obj1 = {name: "Eduardo", Password: 1234};
let user = document.getElementById('user');
let password = document.getElementById('password')

function loginpage () {
  for (var i = 0; i < obj1.length; i++) {
    if (obj1[i].name == user) {
      if (obj1[i].password == password) {
        window.location.assign('page1')
      }
    }
  }
};
