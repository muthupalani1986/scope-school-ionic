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
	selector: "[appStore]"
})

export class AppStoreDirective {

	@Input() appURL: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runAppStore(this.appURL);
	}


	
	/**
	* runAppStore(appURL)
	* @param string appURL = "https://apps.apple.com/us/app/xxxx/id123456"
	**/
	
	private runAppStore(appURL: string){
		this.inAppBrowser.create(appURL,"_system");
	}
	


}
