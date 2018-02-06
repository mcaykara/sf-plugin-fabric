function Crashlytics() {
	this.nativeClass = requireClass("com.crashlytics.android.Crashlytics");
}

Crashlytics.nativeClass = requireClass("com.crashlytics.android.Crashlytics");

Crashlytics.setUserIdentifier = function(identifier){
    Crashlytics.nativeClass.setUserIdentifier(identifier);
};

Crashlytics.setUserName = function(name){
    Crashlytics.nativeClass.setUserName(name);
};

Crashlytics.setUserEmail = function(email){
    Crashlytics.nativeClass.setUserEmail(email);
};

Crashlytics.setBool = function(key, value){
    Crashlytics.nativeClass.setBool(key, value);
};

Crashlytics.setDouble = function(key, value){
    Crashlytics.nativeClass.setDouble(key, value);
};

Crashlytics.setFloat = function(key, value){
    Crashlytics.nativeClass.setFloat(key, value);
};

Crashlytics.setInt = function(key, value){
    Crashlytics.nativeClass.setInt(key, value);
};

Crashlytics.crash = function(){
    Crashlytics.nativeClass.getInstance().crash();
};

module && (module.exports = Crashlytics);
