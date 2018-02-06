function Fabric(params) {}

Fabric.with = function(kits){
    var kitsStringArray = [];
    for (var kit in kits){
        kitsStringArray.push(kits[kit].constructor.name);
    }
    __SF_Fabric.withStringArray(kitsStringArray);
}

module && (module.exports = Fabric);

