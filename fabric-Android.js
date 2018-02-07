function Fabric(params) {}

Fabric.NativeClass = requireClass("io.fabric.sdk.android.Fabric");

Fabric.with = function(kits){
	var arr = [];
	for(var i = 0 ; i<kits.length ; i++){
		arr.push(new kits[i].nativeClass());
	}

	const AndroidConfig = require('sf-core/util/Android/androidconfig');
	var activity = AndroidConfig.activity;
    Fabric.NativeClass.with(activity, array(arr, "io.fabric.sdk.android.Kit"));
};


module && (module.exports = Fabric);

