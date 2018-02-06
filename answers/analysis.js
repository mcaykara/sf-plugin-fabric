/**
 * @class Facebook
 * @since 1.0
 * @see https://developers.facebook.com/
 * @see https://developer.smartface.io/v1.1/docs/facebook-plugin
 *
 * Facebook SDK for iOS and Android allows developers to use some Facebook features with your app such as “share” or “send a message” 
 * from your app to Facebook. It lets people easily sign in to your app with their Facebook accounts. If they have already signed in
 * with Facebook for iOS and Android app, they don’t have to re-enter their username and password. We’ve already integrated iOS and 
 * Android Facebook SDK into Smartface . You only need to create an application on Facebook developer site and need to know JavaScript 
 * functions of the Smartface Facebook plugin.
 * 
 * 
 *     @example
 *     
 *
 */
function Fabric(params){}

/**
 * A model for video content to be shared.
 *
 *     @example
 *       Multimedia.pickFromGallery({
 *           type: Multimedia.Type.VIDEO,
 *           onSuccess: onSuccess,
 *           page : this
 *        });
 *
 *       function onSuccess(picked) {
 *           var video = picked.video;
 *           var shareVideo = new Facebook.ShareVideo();
 *           shareVideo.videoFile = video;
 *
 *           Facebook.shareVideoContent({
 *                page : this,
 *                shareVideo : shareVideo,
 *                peopleIds : ["AaJcJfLdxS-rC9PmYMhzQL7_6LriPY46JzizQZ25"],
 *                shareHashtag : new Facebook.ShareHashtag({hashTag :"#HashTag"}),
 *                quote : "quote",
 *                placeId : "572462939538226",
 *                ref : "refString",
 *                onSuccess : function(data){
 *                    alert("data : " + JSON.stringify(data));
 *                },
 *                onCancel : function(){
 *                    alert("cancel");
 *                },
 *                onFailure : function(error){
 *                    alert(error.message);
 *                }
 *            });
 *       }
 *
 * @method with
 * @param {Array} kits
 * @android
 * @ios
 * @static
 * @since 1.0
 */
Fabric.with = function(kits){};

module.exports = Fabric;
