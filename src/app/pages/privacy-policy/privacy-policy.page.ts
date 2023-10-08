/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { Component , OnInit } from "@angular/core";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { StatusBar } from "@awesome-cordova-plugins/status-bar/ngx";
import { Storage } from "@ionic/storage-angular";
import { environment } from "./../../../../src/environments/environment";
import { Globals } from "../../class/globals/globals";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-privacy-policy",
	templateUrl: "privacy-policy.page.html",
	styleUrls: ["privacy-policy.page.scss"],
})

export class PrivacyPolicyPage {
	
	pageName:string = `privacy-policy` ;
	
	/**
	* PrivacyPolicyPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		private storage: Storage,
		public popoverController: PopoverController,
		private globals: Globals
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#a60009");
		this.storageInit();
	
	

		console.log(`PrivacyPolicyPage`,`pageName`,this.pageName);
	}


	/**
	* PrivacyPolicyPage:storageInit();
	**/
	async storageInit(){
		await this.storage.create();
	}
	
	/**
	* PrivacyPolicyPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


	


	/**
	* PrivacyPolicyPage:ngOnInit()
	* @param string $url = 'http://ihsana.com/'
	**/
	public ngOnInit()
	{
	}  


}
