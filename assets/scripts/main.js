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

function showPublicHoliday() {
  $.ajax({
    url: "http://localhost:3000/api/publicHoliday",
    method: "GET"
  })
    .done(function(holidayDate) {
      console.log(holidayDate)
      let arr = ['JAN', 'FEB','MAR', 'APR', 'MEI', 'JUN', 'JUL','AUG', 'SEP', 'OKT', 'NOV', 'DES']
      holidayDate.data.forEach(element => {
        let month = +element.date.slice(6,7)
        let tanggal = element.date.slice(8,10)
        $("#public-holiday #dating").append(
          `
               <li>
                  <div class="time">
                    <h2>${arr[month-1]}</h2>
                  </div> 
                  <div class="details">
                    <div class="date">
                      <h2>${tanggal}</h2>
                    </div>  
                    <h3>${element.localName}</h3> 
                  </div>
                  <div style="clear: both;"> </div>
                </li>
          `
        )
      });
      
    })
    .fail(function(err) {
      console.log(err)
    })
}




$(document).ready(function() {
  showPublicHoliday()
})