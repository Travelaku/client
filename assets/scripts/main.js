function onSignIn(googleUser) {
  const google_token = googleUser.getAuthResponse().id_token;
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/google-auth',
    data: { google_token }
  })
    .done(success => {
      localStorage.access_token = success.token
      // other function
    })
    .fail(err => {
      // if fail
    })
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}