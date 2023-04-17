// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
var saveEl = $('.saveButton');
var scheduleEvent9 = $('#hour-9 .description');
var scheduleEvent10 = $('#hour-10 .description');
var scheduleEvent11 = $('#hour-11 .description');
var scheduleEvent12 = $('#hour-12 .description');
var scheduleEvent13 = $('#hour-13 .description');
var scheduleEvent14 = $('#hour-14 .description');
var scheduleEvent15 = $('#hour-15 .description');
var scheduleEvent16 = $('#hour-16 .description');
var scheduleEvent17 = $('#hour-17 .description');


$(function () {
  // !Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 
  // HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  saveEl.on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(value);
    console.log(time);
    localStorage.setItem(time, value);
  });
  
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  var currentHour = dayjs().format('H');
  console.log(typeof currentHour);
  for (var i = 9; i <= 17; i++) {
    console.log($('#hour-' + i));
    if (i == currentHour) {
      $('#hour-' + i).addClass('present');
      console.log('hello1');
    } else if (i < currentHour) {
      $('#hour-' + i).addClass('past');
      console.log('hello2');
    } else if (i > currentHour) {
      $('#hour-' + i).addClass('future');
      console.log('hello3');
    } else {
      return
    }
  };


  // !Add code to get any user input that was saved in localStorage and set the values of the corresponding text area elements. 
  // HINT: How can the id attribute of each time-block be used to do this?
  scheduleEvent9.val(localStorage.getItem('hour-9'));
  scheduleEvent10.val(localStorage.getItem('hour-10'));
  scheduleEvent11.val(localStorage.getItem('hour-11'));
  scheduleEvent12.val(localStorage.getItem('hour-12'));
  scheduleEvent13.val(localStorage.getItem('hour-13'));
  scheduleEvent14.val(localStorage.getItem('hour-14'));
  scheduleEvent15.val(localStorage.getItem('hour-15'));
  scheduleEvent16.val(localStorage.getItem('hour-16'));
  scheduleEvent17.val(localStorage.getItem('hour-17'));


  // !Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM DD'));
});
