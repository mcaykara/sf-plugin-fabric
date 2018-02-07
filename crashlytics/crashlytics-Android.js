function Crashlytics() {
	this.nativeClass = Crashlytics.NativeClass;
}

Crashlytics.NativeClass = requireClass("com.crashlytics.android.Crashlytics");

Crashlytics.setUserIdentifier = function(identifier){
    Crashlytics.NativeClass.setUserIdentifier(identifier);
};

Crashlytics.setUserName = function(name){
    Crashlytics.NativeClass.setUserName(name);
};

Crashlytics.setUserEmail = function(email){
    Crashlytics.NativeClass.setUserEmail(email);
};

Crashlytics.setString = function(key, value){
    Crashlytics.NativeClass.setString(key, value);
};

Crashlytics.setBool = function(key, value){
    Crashlytics.NativeClass.setBool(key, value);
};

Crashlytics.setFloat = function(key, value){
    Crashlytics.NativeClass.setFloat(key, value);
};

Crashlytics.setInt = function(key, value){
    Crashlytics.NativeClass.setInt(key, value);
};

Crashlytics.getVersion = function(){
    return Crashlytics.NativeClass.getInstance().getVersion();
};

Crashlytics.crash = function(){
    Crashlytics.NativeClass.getInstance().crash();
};

module && (module.exports = Crashlytics);
