// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:0b0b90b1-7a56-4a90-b585-f29f572d68ed',
});

// Prepare to call Lambda function
var lambda = new AWS.Lambda({region: 'us-east-1', apiVersion: 'v1'});