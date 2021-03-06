var socket = io();
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

console.log(name + ' wants to join ' + room);

// Update room title tag
jQuery('.room-title').text(room);

socket.on('connect', function() {
    console.log('Connected to socket.io server!');
});

socket.on('message', function (message) {
    var momentTimestamp = moment.utc(message.timestamp);
    console.log('New message');
    console.log(message.text);

    var $message = jQuery('.messages');
    $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a') + '</strong></p>');
    $message.append('<p>' + message.text + '</p>');
});

// Hanldes submitting of new message
var $form = jQuery('#message-form');
$form.on('submit', function (event) {
    event.preventDefault();

    var message = $form.find('input[name=message]');

    socket.emit('message', {
        name: name,
        text: message.val()
    });

    message.val('');
});