
function getDate() {
    var currentdate = new Date(); 
    return currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + ("00" + currentdate.getHours()).slice(-2) + ":"  
            + ("00" + currentdate.getMinutes()).slice(-2) + ":" 
            + ("00" + currentdate.getSeconds()).slice(-2);
}

console.log(getDate());

module.exports = getDate;