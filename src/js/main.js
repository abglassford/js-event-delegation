// ** globals ** //

var seed = [
  'Sing happy birthday',
  'Wash the car',
  'Watch the Avalanche win',
  'Look at Wes'
];

// ** dom manipulation ** //

$(document).on('ready', function() {
  seed.forEach(listAppend)
});

$('form').on('submit', function(e) {
    e.preventDefault()
  listAppend($('#todoInput').val())
  })

$('ol').on('click', 'li', function(){
    $(this).remove()
  })

// ** helper functions ** //

function listAppend (toDoItem) {
  $('#all-todos').append('<li>' + toDoItem + '</li>')
}
