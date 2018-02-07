function Answers(params) {}

Answers.CustomAttribute = require("./customattribute");

Answers.logCustom = function(eventName, customAttributes){
    var customDictionary = {};
    for(var i = 0 ; i < customAttributes.length ; i++){
        customDictionary[customAttributes[i].key] = customAttributes[i].value;
    }
    __SF_Answers.logCustomEventWithNameCustomAttributes(eventName,customDictionary);
}

module && (module.exports = Answers);
