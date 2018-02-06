function Answers() {
	this.nativeClass = requireClass("com.crashlytics.android.answers.Answers");
}

Answers.nativeClass = requireClass("com.crashlytics.android.answers.Answers");
Answers.nativeCustomEvent = requireClass("com.crashlytics.android.answers.CustomEvent");


module && (module.exports = Answers);
