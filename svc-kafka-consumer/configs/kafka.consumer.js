const colors = require('colors/safe');
var config = {};

config.globalVariables = () => {
    global.consoleLog = (msg) => {
        console.log(colors.green(currentDateParser() + ' [svc-object-mapper] ') + colors.cyan(msg));
    }

    global.consoleLogError = (msg) => {
        console.log(colors.green(currentDateParser() + ' [svc-object-mapper] ') + colors.red(msg));
    }
    
    global.currentDateParser = () => {
       var currentdate = new Date();

       var temp = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
       return temp;
    }

    global.getCurrentDate = () => {
        var currentdate = new Date();
 
        var temp = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear();
        
        return temp;
     }

    global.successModel = {
        status : 'success',
        statusCode : 0,
        isSuccess : true,
        message : ''
    }

    global.failModel = {
        status : 'failed',
        statusCode : 1,
        isSuccess : false,
        message : 'Error encountered while processing request.'
    }

}

module.exports = config;