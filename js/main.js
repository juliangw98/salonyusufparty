// = function() {
//    document.body.height = window.innerHeight;
// }
$(document).ready(function() {
fetch("https://graph.instagram.com/me?fields=id,username&access_token=IGQVJVZAWRvTXQ5SHBka2FuM0o0bVRtUnJKNXMxMjBuV05ZAMDQyUUlYaFhabFRieWtXLWNHUEw2VUp6VmU1X0lDdFJkNDFYbThONV9ka2dlWmE2NlluYTlDSUlrNGt0ZAkQwR2E0ckdIcFdYRDM0dnZAJUnFOWTdJX0Fxcl9v", gotData)

function gotData(data){
  console.log(data);
}




  document.getElementById("home1").style.height = window.innerHeight + 'px';
  $('#contact').click(function(){
  $("#contact-content").addClass("slideUp");
  var x = document.getElementsByClassName("slideUp");
    x[0].style.height = window.innerHeight + 'px';

  });
  $('#contact2').click(function(){
  $("#contact-content").addClass("slideUp");
  var x = document.getElementsByClassName("slideUp");
    x[0].style.height = window.innerHeight + 'px';
});
$('#afspraak').click(function(){
$("#afspraak-content").addClass("slideUp");
var x = document.getElementsByClassName("slideUp");
  x[0].style.height = window.innerHeight + 'px';
});
$('#afspraak2').click(function(){
$("#afspraak-content").addClass("slideUp");
var x = document.getElementsByClassName("slideUp");
  x[0].style.height = window.innerHeight + 'px';
});
$('#resultaten').click(function(){
$("#klant-content").addClass("slideUp");
var x = document.getElementsByClassName("slideUp");
  x[0].style.height = window.innerHeight + 'px';
});
$('#resultaten2').click(function(){
$("#klant-content").addClass("slideUp");
var x = document.getElementsByClassName("slideUp");
  x[0].style.height = window.innerHeight + 'px';
});
$('#over').click(function(){
$("#over-content").addClass("slideUp");
var x = document.getElementsByClassName("slideUp");
  x[0].style.height = window.innerHeight + 'px';
});
$('#over2').click(function(){
$("#over-content").addClass("slideUp");
var x = document.getElementsByClassName("slideUp");
  x[0].style.height = window.innerHeight + 'px';
});
$('#buttonYusuf').click(function(){
$("#yusuf-content").addClass("slideUp2");
var x = document.getElementsByClassName("slideUp2");
  x[0].style.height = window.innerHeight + 'px';
});
$('#buttonGigi').click(function(){
$("#gigi-content").addClass("slideUp2");
var x = document.getElementsByClassName("slideUp2");
  x[0].style.height = window.innerHeight + 'px';
});
$('#buttonSalon').click(function(){
$("#salon-content").addClass("slideUp2");
var x = document.getElementsByClassName("slideUp2");
  x[0].style.height = window.innerHeight + 'px';
});
$('#tarieven').click(function(){
$("#tarieven-content").addClass("slideUp");
var x = document.getElementsByClassName("slideUp");
  x[0].style.height = window.innerHeight + 'px';
});
$('#tarieven2').click(function(){
$("#tarieven-content").addClass("slideUp");
var x = document.getElementsByClassName("slideUp");
  x[0].style.height = window.innerHeight + 'px';
});
$('#producten').click(function(){
$("#producten-content").addClass("slideUp");
var x = document.getElementsByClassName("slideUp");
  x[0].style.height = window.innerHeight + 'px';
});
$('#producten2').click(function(){
$("#producten-content").addClass("slideUp");
var x = document.getElementsByClassName("slideUp");
  x[0].style.height = window.innerHeight + 'px';
});
$('.closePage').click(function(){
  // alert('been clicked');
  var x = document.getElementsByClassName("slideUp");
    x[0].style.height = 0 + 'px';
  $(".slideUp").removeClass("slideUp");
});
$('.closePage2').click(function(){
  // alert('been clicked');
  var x = document.getElementsByClassName("slideUp");
    x[0].style.height = window.innerHeight + 'px';
  $(".slideUp2").removeClass("slideUp2");
});
});


//
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
//         datasets: [{
//             label: 'drukte',
//             data: [3, 2, 3, 3, 4, 5, 5, 6,7 ,6 ,6 ],
//             backgroundColor: [
//                 '#333',
//                 '#333',
//                 '#333',
//                 '#333',
//                 '#333',
//                 '#333',
//                 '#333',
//                 '#333',
//                 '#333',
//                 '#333',
//                 '#333',
//             ],
//             // borderColor: [
//             //     'rgba(255, 99, 132, 1)',
//             //     'rgba(54, 162, 235, 1)',
//             //     'rgba(255, 206, 86, 1)',
//             //     'rgba(75, 192, 192, 1)',
//             //     'rgba(153, 102, 255, 1)',
//             //     'rgba(255, 159, 64, 1)'
//             // ],
//             // borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//
//             yAxes: [{
//                 ticks: {
//                     // beginAtZero: false
//                 }
//             }]
//         }
//     }
// });
