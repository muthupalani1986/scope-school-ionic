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
	selector: "app-about-us",
	templateUrl: "about-us.page.html",
	styleUrls: ["about-us.page.scss"],
})

export class AboutUsPage {
	
	pageName:string = `about-us` ;
	
	/**
	* AboutUsPage:constructor()
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
	
	

		console.log(`AboutUsPage`,`pageName`,this.pageName);
	}


	/**
	* AboutUsPage:storageInit();
	**/
	async storageInit(){
		await this.storage.create();
	}
	
	/**
	* AboutUsPage:showPopover()
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
	* AboutUsPage:ngOnInit()
	* @param string $url = 'http://ihsana.com/'
	**/
	public ngOnInit()
	{
	}  


}
