var AWS = require('aws-sdk');

addBucketFileToIndexOfCSD = function (bucketName, docName, docContent, context) {
    
    var MYSERVICESREGION = process.env.SERVICES_REGION;
    var MYCSNAME = process.env.CS_NAME;
    
    var csd = new AWS.CloudSearchDomain({
        endpoint: MYCSNAME+'.'+MYSERVICESREGION+'.cloudsearch.amazonaws.com',
        apiVersion: 'v1'
    });
    
    var addParam = [
         {"type": "add",
          "id":   bucketName+':'+docName, 
          "fields": {
            "content": docContent,
            "content_encoding":	"ISO-8859-1",
 	        "content_type":	"text/plain",
 	        "resourcename": docName
          }
         },
        ];
    
    var params = {
        contentType: 'application/json',
        documents: JSON.stringify(addParam),
    };
    csd.uploadDocuments(params, function(err, data) {
        if (err) {
            console.log('Ther is a error occurred when execute csd.uploadDocuments');
            console.log(err, err.stack);
            context.done();
        }
        else {
            console.log('Succeed in executing csd.uploadDcocuments ');
            console.log(data);
            context.done();
        }
    });
};

exports.handler = (event, context, callback) => {
    
    var filename = event.Records[0].s3.object.key;
    var bucketname = event.Records[0].s3.bucket.name;
    console.log("filename======" + filename);
    console.log("bucketname=====" + bucketname);
    var params = {
        Bucket: bucketname,
        Key: filename,
        RequestPayer: 'requester',
    };
    var s3 = new AWS.S3();
    s3.getObject(params, function (err, data) {
        if (err) {
            console.log('File was not found : ' + err);
        }
        else {
            var contentText = data.Body.toString('utf8');
            addBucketFileToIndexOfCSD(bucketname, filename, contentText, context);
            console.log('Added bucket file to cloud search domain ');
        }
    });
};
