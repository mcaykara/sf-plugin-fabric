function Crashlytics(params) {}

Crashlytics.setUserIdentifier = function(identifier){
__SF_Crashlytics.sharedInstance().setUserIdentifier(identifier);
};

Crashlytics.setUserName = function(name){
__SF_Crashlytics.sharedInstance().setUserName(name);
};

Crashlytics.setUserEmail = function(email){
__SF_Crashlytics.sharedInstance().setUserEmail(email);
};

Crashlytics.setBool = function(key, value){
__SF_Crashlytics.sharedInstance().setBoolValueForKey(value,key);
};

Crashlytics.getVersion = function(){
return __SF_Crashlytics.sharedInstance().version;
};

Crashlytics.setFloat = function(key, value){
__SF_Crashlytics.sharedInstance().setFloatValueForKey(value,key);
};

Crashlytics.setInt = function(key, value){
__SF_Crashlytics.sharedInstance().setIntValueForKey(value,key);
};

Crashlytics.setString = function(key, value){
__SF_Crashlytics.sharedInstance().setObjectValueForKey(value,key);
};

Crashlytics.crash = function(){
__SF_Crashlytics.sharedInstance().crash();
};

module && (module.exports = Crashlytics);
