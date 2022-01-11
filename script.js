// <<--- Navbar changed handler --->>
$(document).ready(() => {
  $(window).scroll(() => {
    let nScroll = $(this).scrollTop()
    if (nScroll > 40) {
      $('.navbar').addClass('shadow')
    } else {
      $('.navbar').removeClass('shadow')
    }
  })
})

// <<--- Copyright Year --->>
let date = new Date()
let year = date.getFullYear()
$('#footer .year').html(year)

// <<--- NavLink active handler --->>
const navLink = $('.navbar-nav .nav-item .nav-link')
const navBrand = $('.navbar .navbar-brand')
navBrand.on('click', function () {
  navLink.removeClass('active')
  $('.navbar-nav .nav-item .nav-link.home').addClass('active')
})
navLink.on('click', function () {
  navLink.removeClass('active')
  $(this).addClass('active')
  alert('ok')
})