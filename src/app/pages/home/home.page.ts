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
import { register } from "swiper/element/bundle";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";
//export


@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})

export class HomePage {
	
	pageName:string = `home` ;
	
	/**
	* HomePage:constructor()
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
	
	
		//constructor
		register();

		console.log(`HomePage`,`pageName`,this.pageName);
	}


	/**
	* HomePage:storageInit();
	**/
	async storageInit(){
		await this.storage.create();
	}
	
	/**
	* HomePage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


	slideItems: any;
public ngOnInit(){
	
	this.slideItems = 
[
    {
        "title": "Welcome to <br\/>First App!",
        "description": "First App",
        "image": "assets\/images\/slides\/image-1.png"
    },
    {
        "title": "Like Magic!",
        "description": "Suspendisse rhoncus neque quis neque luctus, sit amet dictum ex condimentum",
        "image": "assets\/images\/slides\/image-2.png"
    },
    {
        "title": "Unlimited App!",
        "description": "Aliquam imperdiet pharetra ligula ut ullamcorper. Maecenas pharetra imperdiet nunc",
        "image": "assets\/images\/slides\/image-2.png"
    }
]
	
	}
	




}
