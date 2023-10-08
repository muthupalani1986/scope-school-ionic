/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { Directive, HostListener, Input, ElementRef } from "@angular/core";
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";
import { InAppBrowserOptions } from "@awesome-cordova-plugins/in-app-browser/ngx";

@Directive({
	selector: "[googlePlayApp]"
})

export class GooglePlayAppDirective {

	@Input() appId: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runGooglePlayApp(this.appId);
	}


	
	/**
	* runGooglePlayApp($appId)
	* @param string $appId = "com.imabuilder.myapp"
	**/
	
	private runGooglePlayApp(app_id: string){
		let myAppID = app_id || "com.imabuilder.firstapp.firstapp";
		if(myAppID == ""){
			myAppID = "com.imabuilder.firstapp.firstapp";
		}
		let urlSchema = "market://details?id=" + myAppID;
		this.inAppBrowser.create(urlSchema,"_system");
	}
	


}
