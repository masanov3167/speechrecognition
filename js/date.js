var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var date = date.getDate();
var hour = date.getHours();
var minut = date.getMinutes();
var seconds = date.getSeconds();
var msecund = date.getMilliseconds();
var millisecund = date.getTime();
var timeZone = date.getTimezoneOffset();

console.log(date);





function dateFormat(format){
    var dates = new Date(format);
    var days = String(dates.getDate()).padStart(2,0);
    var months = String(dates.getMonth() +1).padStart(2,0);
    var years = dates.getFullYear();

    return `${days} ${months} ${years}`;
}

console.log(dateFormat());