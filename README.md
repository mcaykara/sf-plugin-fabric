# Fabric plugin from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE)

## Fabric plugin 
Fabric is a mobile platform with modular kits you can mix and match to build the best apps. Fabric is tightly integrated into your dev environment, making adding new services a breeze.

## Installation
Smartface Fabric plugin can be installed via npm easily from our public npm repository. The installation is pretty easy via Smartface Cloud IDE.

- Run command `(cd ~/workspace/scripts && npm i -S sf-plugin-fabric)`

### Android
- Dowload the android plugin project in Native/Android.
- Open the downloaded project on Android Studio.
- Open build.gradle in native plugin project and change applicationId property with your package name.
- Open AndroidManifext.xml in native plugin project and change io.fabric.ApiKey property with your key.
- And follow the Developing Android Plugins document. [https://developer.smartface.io/docs/android-plugins](https://developer.smartface.io/docs/android-plugins)

### iOS
- Add API_KEY in config/iOS/Info.plist
```xml
<key>Fabric</key>
  <dict>
      <key>APIKey</key>
      <string>API_KEY</string>
      <key>Kits</key>
      <array>
          <dict>
              <key>KitInfo</key>
              <dict/>
              <key>KitName</key>
              <string>Crashlytics</string>
          </dict>
          <dict>
              <key>KitInfo</key>
              <dict/>
              <key>KitName</key>
              <string>Answers</string>
          </dict>
      </array>
  </dict>
```
- Add fabric plugin to config/project.json file with API_KEY and BUILD_SECRET.
You can find API_KEY and BUILD_SECRET by following the steps below
<p>   1 - Settings</p>
<p>   2 - Organizations</p>
<p>   3 - Select Organization</p>
<p>   4 - Click Api key and Build secret</p>
```javascript
"fabricios": {
    "url": "",
	"path": "plugins/iOS/fabricios.zip",
	"active": true,
	"fabric": {
	"API_KEY" : "API_KEY",
	"BUILD_SECRET" : "BUILD_SECRET"
	}
}
```
## How to use

```javascript

// app.js :
// ---------------------------------------------------------------------------------
    // This codes should be written in the app.js file.
    const Fabric = require("sf-plugin-fabric");   
    const Crashlytics = require("sf-plugin-fabric/crashlytics");
    const Answers = require("sf-plugin-fabric/answers");
    
    Fabric.with([new Crashlytics(),new Answers()]);
// ---------------------------------------------------------------------------------

// logCustom is usable any page. Example: 
// ---------------------------------------------------------------------------------
    const Answers = require("sf-plugin-fabric/answers");
    Answers.logCustom('Log-Title', 
        [
            // Value must be only string or number
            new Answers.CustomAttribute("key1","value1"), 
            new Answers.CustomAttribute("key2",2)
        ] 
    );
// ---------------------------------------------------------------------------------


const Page = require("sf-core/ui/page");
const Page = require("sf-core/ui/page");
const extend = require("js-base/core/extend");

const Fabric = require("sf-plugin-fabric");   
const Crashlytics = require("sf-plugin-fabric/crashlytics");
const Answers = require("sf-plugin-fabric/answers");
                
var Page1 = extend(Page)(
    function(_super) {
        _super(this, {
            onShow: function(params) {
                this.statusBar.visible = true;
                this.headerBar.visible = true;
       
                /*
                  You can use Crashlytics.setUserIdentifier to provide an ID number, token, or hashed value that uniquely     
                  identifies the end-user of your application without disclosing or transmitting any of their personal 
                  information. This value is displayed right in the Fabric dashboard.
                */
                Crashlytics.setUserIdentifier("UserIdentifier");
                
                // If you would like to take advantage of advanced user identifier features, you can additionally use both:
                Crashlytics.setUserName("UserName");
                Crashlytics.setUserEmail("UserEmail");
                
                /*
                  Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable 
                  right from the Crashlytics dashboard. Setting keys are as easy as calling: Crashlytics.setString(key, value) 
                  or one of the related methods. Options are:
                */
                Crashlytics.setString("key", "value");
                Crashlytics.setBool("key", true);
                Crashlytics.setFloat("key", 15.5);
                Crashlytics.setInt("key", 12);

                /*
                  To log a custom event to be sent to Answers, use the following.
                  You can also include a series of custom attributes to get even deeper insight into what’s happening in your 
                  app.
                  In addition to the recommended attributes for each event, you can also add custom attributes for any event. 
                  To log an event with a custom attribute, use the following.
                */
                Answers.logCustom('Log-Title', 
                  [
                    // Value must be only string or number
                    new Answers.CustomAttribute("key1","value1"), 
                    new Answers.CustomAttribute("key2",2)
                  ] 
                );
                
            }
        });

    }
);
module.exports = Page1;
```
## License
This project is licensed under the terms of the MIT license. See the [LICENSE](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
