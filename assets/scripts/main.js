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
    .done(function (holidayDate) {
      let currentYear = new Date().getFullYear()
      $("#public-holiday #year h1").append(`
      <h1 style="">${currentYear} Indonesian Public Holiday</h1>
      `)
      let arr = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DES']
      holidayDate.data.forEach(element => {
        let month = +element.date.slice(5, 7)
        let tanggal = element.date.slice(8, 10)
        $("#public-holiday #dating").append(
          `
            <li>
                <div class="time">
                  <h2>${arr[month - 1]}</h2>
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
    .fail(function (err) {
      console.log(err)
    })
}

function fetchData(address) {
  $.ajax({
    url: "http://localhost:3000/api/getdata",
    method: "post",
    data: {
      address
    }
  })
    .done(data => {
      console.log(data)
      fetchAttraction(data.attractions)
      fetchHotels(data.hotels)
    })
    .fail(err => {
      console.log(err)
    })
}

function fetchAttraction(attractions) {
  $("#card-attraction").empty()
  attractions.forEach(el => {
    if (el) {
      $("#card-attraction").append(
        ` <div class="col-md-4">
            <div class="card bg-light mb-4" style="height:550px;" >
              <div class="card-body">
                <h5 id="card-name">${el.name}</h5>
                <img src="${el.image_url}" alt="" width="100%" height="240px" style="padding-bottom: 10%;">
                <h6>Rating:</h6>
                <p id="card-address">${el.address}</p>
                <h6>Addres :</h6>
                <p id="card-type">${el["category/type"]}</p>
                <a href="#" class="btn btn-primary">Details</a>
              </div>
            </div>
          </div> `
      )
    }
  })
}

function fetchHotels(hotels) {
  hotels.forEach(el => {
    if (el) {
      $("#card-hotels").append(
        ` <div class="col-md-4">
            <div class="card bg-light mb-4" style="height:550px;" >
              <div class="card-body">
                <h5 id="card-name">${el.name}</h5>
                <img src="${el.image_url}" alt="" width="100%" height="240px" style="padding-bottom: 10%;">
                <h6>Rating:</h6>
                <p id="card-rating">${el.rating}</p>
                <h6>Price :</h6>
                <p id="card-price">${el.price}</p>
                <a href="#" class="btn btn-primary">Details</a>
              </div>
            </div>
          </div>`
      )
    }
  })
}

function signIn() {
  // SHOW
  $('#sign-in').show()
  $('#sign-up-navbar').show()
  // HIDE
  $('#sign-up').hide()
  $('#sign-in-navbar').hide()
  $('#sign-out-navbar').hide()
  $('#public-holiday').hide()
  $('#home-navbar').hide()
  $('#explore-navbar').hide()
  $('.cards').hide()
}

function signUp() {
  // SHOW
  $('#sign-up').show()
  $('#sign-in-navbar').show()
  // HIDE
  $('#sign-in').hide()
  $('#sign-up-navbar').hide()
  $('#sign-out-navbar').hide()
  $('#public-holiday').hide()
  $('#home-navbar').hide()
  $('#explore-navbar').hide()
  $('.cards').hide()
}

function home() {
  // SHOW
  $('#home-navbar').show()
  $('#explore-navbar').show()
  $('#public-holiday').show()
  // HIDE
}

$(document).ready(function () {
  showPublicHoliday()
  // fetchData()
  $('#searchForm').submit(event => {
    event.preventDefault()
    console.log('clicked')
    address = $('#searchInput').val()
    fetchData(address)
  })

  signIn()
  // showPublicHoliday()
  // fetchAttrachtion()
  $('#sign-in-navbar').on('click', () => {
    signIn()
    $('#signin-submit').click(() => {
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    })
  })
  $('#sign-up-navbar').on('click', () => {
    signUp()
  })
})