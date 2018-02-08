function Answers() {
	this.nativeClass = Answers.NativeClass;
}

Answers.NativeClass = requireClass("com.crashlytics.android.answers.Answers");
Answers.CustomEvent = requireClass("com.crashlytics.android.answers.CustomEvent");
Answers.CustomAttribute = require("./customattribute");

Answers.logCustom = function(eventName, customAttributes){
	var event = new Answers.CustomEvent(eventName);
	if(customAttributes){
		for(var i = 0 ; i<customAttributes.length ; i++){
			event = event.putCustomAttribute(customAttributes[i].key, customAttributes[i].value);
		}
	}
	Answers.NativeClass.getInstance().logCustom(event);
}
module && (module.exports = Answers);
