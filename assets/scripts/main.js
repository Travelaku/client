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
      holidayDate.data.forEach(element => {
        let month = element.date.slice(5,7)
        let tanggal = element.date.slice(8,10)
        if (month === "01") {
           $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>JAN</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "02") {
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>FEB</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "03") {
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>MAR</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "04") {
          console.log(tanggal, 'APRIL')
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>APR</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "05") {
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>MAY</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "06") {
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>JUN</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "07") {
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>JUL</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "08") {
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>AUG</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "09") {
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>SEP</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "10") {
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>OCT</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "11") {
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>NOV</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        } else if (month === "12") {
          $("#public-holiday #dating").append(`
           <li>
              <div class="time">
                <h2>DES</h2>
              </div> 
              <div class="details">
                <div class="date">
                  <h2>${tanggal}</h2>
                </div>  
                <h3>${element.localName}</h3> 
              </div>
              <div style="clear: both;"> </div>
            </li>
          `)
        }
       
      });
      
    })
    .fail(function(err) {
      console.log(err)
    })
}

$(document).ready(function() {
  showPublicHoliday()
})