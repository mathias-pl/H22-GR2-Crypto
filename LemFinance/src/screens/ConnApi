const URL = 'http://34.95.8.78/api/login';

async function getDataFromApi(URL) {
  const response = await fetch(URL);

  var data = await response.json();

  alert(data);
}

async function sendJSON(username1, password1, email1, phoneNum) {
  

  var dict = {
    username: username1,
    password: password1,
    email: email1,
    phone_number: phoneNum,
  };

  var dictstring = JSON.stringify(dict);

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: dictstring,
  })

  var data = await response.json();

  alert(data["success"]);

}