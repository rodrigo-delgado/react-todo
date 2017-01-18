const moment = require('moment')

console.log(moment().format())



const now = moment()
console.log('Current timestamp', now.unix());

var timestamp = 1484765784
var currenMoment = moment.unix(timestamp)
console.log('current moment', currenMoment.format('DD, MMMM, YYYY @ h:m A'));
