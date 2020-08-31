var moment = require('moment');
const { months } = require('moment');
var now = moment();

//https://momentjs.com/docs/#/displaying/format/
//console.log(now.format());
//now.subtract(1, 'year');
//console.log(now.format());
//console.log(now.format('MMM Do YYYY, h:mm a'));
//console.log(now.format('X')); //Unix Timestamp
//console.log(now.format('x')); //Unix Millisecond Timestamp

var timestamp = 1598869212024; //Unix Millisecond Timestamp
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mm a'));