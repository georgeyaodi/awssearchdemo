var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    
    var SERVICES_REGION = process.env.SERVICES_REGION;
    var CS_NAME = process.env.CS_NAME;
    
    var csd = new AWS.CloudSearchDomain({
        endpoint: CS_NAME+'.'+SERVICES_REGION+'.cloudsearch.amazonaws.com',
        apiVersion: 'v1'
    });
    
    var params = {
        query: event.query,
        sort: '_score desc',
        size: 40,
        start: 0,
        queryOptions: JSON.stringify({fields: ['content']}),
    };
   
    
    
    csd.search(params, function(err, data) {
        if (err) {
            callback('CloudSearch ERROR');
            context.done();
        }
        else {
            console.log("Searching content from cloud search domain");
            console.log("content is++=======" + data);
            callback(null, data);
            context.done();
        }
    });
};