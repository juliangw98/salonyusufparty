// = function() {
//    document.body.height = window.innerHeight;
// }

var height = window.innerHeight;

$(window).on('load', function () {
  $('.block').height = height;
  $('.slideUp').height = height;
  $('.slideUp2').height = height;

  console.log($('.block').innerHeight);
$('.fadeInNow').addClass("fadeInAnimation");

});
$(document).ready(function() {
  $('#contact').click(function(){
  $("#contact-content").addClass("slideUp");
});
  $('#contact2').click(function(){
  $("#contact-content").addClass("slideUp");
});
$('#afspraak').click(function(){
$("#afspraak-content").addClass("slideUp");
});
$('#afspraak2').click(function(){
$("#afspraak-content").addClass("slideUp");
});
$('#resultaten').click(function(){
$("#klant-content").addClass("slideUp");
});
$('#resultaten2').click(function(){
$("#klant-content").addClass("slideUp");
});
$('#over').click(function(){
$("#over-content").addClass("slideUp");
});
$('#over2').click(function(){
$("#over-content").addClass("slideUp");
});
$('#buttonYusuf').click(function(){
$("#yusuf-content").addClass("slideUp2");
});
$('#buttonGigi').click(function(){
$("#gigi-content").addClass("slideUp2");
});
$('#buttonSalon').click(function(){
$("#salon-content").addClass("slideUp2");
});
$('#tarieven').click(function(){
$("#tarieven-content").addClass("slideUp");
});
$('#tarieven2').click(function(){
$("#tarieven-content").addClass("slideUp");
});
$('#producten').click(function(){
$("#producten-content").addClass("slideUp");
});
$('#producten2').click(function(){
$("#producten-content").addClass("slideUp");
});
$('.closePage').click(function(){
  // alert('been clicked');
  $(".slideUp").removeClass("slideUp");
});
$('.closePage2').click(function(){
  // alert('been clicked');
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
