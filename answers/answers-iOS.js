function Answers(params) {}

Answers.CustomAttribute = require("./customattribute");

Answers.logCustom = function(eventName, customAttributes){
	try{
	    var customDictionary = {};
	    for(var i = 0 ; i < customAttributes.length ; i++){
	        customDictionary[customAttributes[i].key] = customAttributes[i].value;
	    }
	    __SF_Answers.logCustomEventWithNameCustomAttributes(eventName,customDictionary);
    } catch (e) {}
}

module && (module.exports = Answers);
