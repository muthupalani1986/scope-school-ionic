/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { NgModule } from "@angular/core";

import { AppBrowserDirective } from "./app-browser/app-browser.directive";
import { AppStoreDirective } from "./app-store/app-store.directive";
import { AppWebviewDirective } from "./app-webview/app-webview.directive";
import { CallAppDirective } from "./call-app/call-app.directive";
import { ContactUsDirective } from "./contact-us/contact-us.directive";
import { CordovaWebviewDirective } from "./cordova-webview/cordova-webview.directive";
import { FacebookAppDirective } from "./facebook-app/facebook-app.directive";
import { GeoAppDirective } from "./geo-app/geo-app.directive";
import { GooglePlayAppDirective } from "./google-play-app/google-play-app.directive";
import { ImageZoomDirective } from "./image-zoom/image-zoom.directive";
import { LineAppDirective } from "./line-app/line-app.directive";
import { MailAppDirective } from "./mail-app/mail-app.directive";
import { SmsAppDirective } from "./sms-app/sms-app.directive";
import { SocialSharingDirective } from "./social-sharing/social-sharing.directive";
import { SystemBrowserDirective } from "./system-browser/system-browser.directive";
import { TwitterAppDirective } from "./twitter-app/twitter-app.directive";
import { WhatsappAppDirective } from "./whatsapp-app/whatsapp-app.directive";
import { XSocialSharingDirective } from "./x-social-sharing/x-social-sharing.directive";
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";
import { TextToSpeechAdvanced } from "@awesome-cordova-plugins/text-to-speech-advanced/ngx";
import { SocialSharing } from "@awesome-cordova-plugins/social-sharing/ngx";

@NgModule({
	declarations: [
		AppBrowserDirective,
		AppStoreDirective,
		AppWebviewDirective,
		CallAppDirective,
		ContactUsDirective,
		CordovaWebviewDirective,
		FacebookAppDirective,
		GeoAppDirective,
		GooglePlayAppDirective,
		ImageZoomDirective,
		LineAppDirective,
		MailAppDirective,
		SmsAppDirective,
		SocialSharingDirective,
		SystemBrowserDirective,
		
		TwitterAppDirective,
		WhatsappAppDirective,
		XSocialSharingDirective
	],
	imports: [],
	exports: [
		AppBrowserDirective,
		AppStoreDirective,
		AppWebviewDirective,
		CallAppDirective,
		ContactUsDirective,
		CordovaWebviewDirective,
		FacebookAppDirective,
		GeoAppDirective,
		GooglePlayAppDirective,
		ImageZoomDirective,
		LineAppDirective,
		MailAppDirective,
		SmsAppDirective,
		SocialSharingDirective,
		SystemBrowserDirective,
		TwitterAppDirective,
		WhatsappAppDirective,
		XSocialSharingDirective
	],
	providers: [
		InAppBrowser,
		TextToSpeechAdvanced,
		SocialSharing
	]
})

export class DirectivesModule {}
