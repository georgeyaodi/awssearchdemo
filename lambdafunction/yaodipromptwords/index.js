exports.handler = (event, context, callback) => {
    // TODO implement
    var availableTags = [
                  "api platform",
                  "api gateway",
                  "Developer Dashboard",
                  "Developer Portal"
                ];
    var response = {
        statusCode: 200,
        body: JSON.stringify(availableTags),
        //body: availableTags
    };
    callback(null, response);
};
