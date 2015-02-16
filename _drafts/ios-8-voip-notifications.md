---
layout: post
title: iOS 8 VoIP Notifications
categories:
tags:
image:
---

In iOS 8, Apple introduced a new type of push notification that could be used by VoIP apps in order to wake them up when recieving a call. With this new type of notification developers don't need to set [keep alive handler](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/StrategiesforImplementingYourApp/StrategiesforImplementingYourApp.html#//apple_ref/doc/uid/TP40007072-CH5-SW13) in order to keep the app alive. The new notification type will wake up the app in the background when needed instead of keeping the app running in the background. Overall this should help reduce data usage and improve battery life for users.

This all sounds good but after looking through the [documentation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplication_Class/index.html#//apple_ref/occ/instm/UIApplication/setKeepAliveTimeout:handler:) there is no refence to how to implement this. The documentation states:

>In iOS 8 and later, voice-over-IP (VoIP) apps register for UIRemoteNotificationTypeVoIP remote notifications instead of using this method.

The problem is that `UIRemoteNotificationTypeVoIP` does not exists. It does not exist because Apple has introduced a new push notification framework specifically for this type of notificaiton which is called [`PushKit`](https://developer.apple.com/library/prerelease/ios/documentation/NetworkingInternet/Reference/PushKit_Framework/index.html)

Before getting started with the implementation there are a couple of things that need to be done. Firstly, a `Voip Services` certificate will be needed so navigation to the [iOS Developer Center](https://developer.apple.com/devcenter/ios/index.action) and navigate to the `Certificates, Identifier & Profiles` section as seen below: 

![][1]

In order to be able to recieve push notifications an app identifier needs to be created. This can be done by navigating to the identifiers section then clicking the add button.

![][2]

![][3]

Since we are using push notifications we will need to specify the bundle id for the app. For this example we will be using `com.pierremarcairoldi.voip`. The form should look like the one below. Don't worry about the App Services section for now, we will fill that in later.

![][4]

---

So far we have setup our app identifier but we still need to setup the push notifications. To do so navigate to the `Certificates` section and click the add button and then select the `VoIP Services Certificate` option as seen below:

![][5]

![][6]

We will then be asked to select an app id for the `VoIP Service Certificate`. For this we will pick the identifier we created in the previous section from the dropdown. The identifier will contain some random letters and number at beginning so just pick the one that end in `com.pierremarcairoldi.voip`. We are now asked to generate a `Certificate Signing Request` so follow the onscreen instructions and then click continue. The next section will ask us to upload the CSR file we just created so that it can generate our certificate. Once this is done click generate. The result should look something like this:

![][7]

Download the certificate and open it when it has finished. This should open the Keychain Access app and you should see the certificate under the certificates section. Ok, we are now done with the setup. We can start actually working on the app.

---

[1]: /assets/post_images/ios-8-voip-notifications/ios-8-voip-notifications-1.jpg
[2]: /assets/post_images/ios-8-voip-notifications/ios-8-voip-notifications-2.jpg
[3]: /assets/post_images/ios-8-voip-notifications/ios-8-voip-notifications-3.jpg
[4]: /assets/post_images/ios-8-voip-notifications/ios-8-voip-notifications-4.jpg
[5]: /assets/post_images/ios-8-voip-notifications/ios-8-voip-notifications-5.jpg
[6]: /assets/post_images/ios-8-voip-notifications/ios-8-voip-notifications-6.jpg
[7]: /assets/post_images/ios-8-voip-notifications/ios-8-voip-notifications-7.jpg



