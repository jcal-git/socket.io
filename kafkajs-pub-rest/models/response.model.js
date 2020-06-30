var responseModel = {};

responseModel.globalVariables = () => {

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

module.exports = responseModel;