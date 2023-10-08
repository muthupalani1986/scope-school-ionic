/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { AppSideMenus } from "./app.side-menus";

import { Platform, NavController } from "@ionic/angular";
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { Storage } from "@ionic/storage-angular";
import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";
import { StatusBar } from "@awesome-cordova-plugins/status-bar/ngx";
import { InAppBrowser,InAppBrowserOptions } from "@awesome-cordova-plugins/in-app-browser/ngx";
import { Device } from "@awesome-cordova-plugins/device/ngx";
import { Globals } from "./class/globals/globals";
import { environment } from "./../../src/environments/environment";



@Component({
	selector: "app-root",
	templateUrl: "app.component.html"
})
export class AppComponent {

	appTitle:string = "First App";
	appSubTitle:string = "First App";
	appMenus:any = [] ;



	/**
	* FirstApp:constructor()
	**/

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private menuController: MenuController,
		private platform: Platform,
		private storage: Storage,
		private statusBar: StatusBar,
		private splashScreen: SplashScreen,
		private device: Device,
		private navController: NavController,
		private appSideMenus: AppSideMenus,
		private window: Window,
		private globals: Globals){
			//initialization items for static menu
			this.appMenus = this.appSideMenus.items;
			//initialization app
			this.initializeApp();
	}
	

	/**
	* FirstApp:initializeApp()
	**/

	initializeApp() {
		this.platform.ready().then(() => {

			// set status bar
			this.statusBar.backgroundColorByHexString("#a60009");

			// hide splashscreen
			this.splashScreen.hide();

			// ionic storage
			this.storageInit();

		});


		this.handlerBackButton();
		
	}


	/**
	* FirstApp:storageInit();
	**/
	async storageInit(){
		await this.storage.create();
	}


	/**
	* FirstApp:handlerBackButton();
	**/
	private handlerBackButton(){
		let pageName = `dashboard`;
		this.router.events.subscribe((event: Event) =>{
			if(event instanceof NavigationStart){
				let getPage = event.url.toString().split("/");
				pageName = getPage[1];
				console.log(`pageName`,pageName);
			}
		});
		this.platform.backButton.subscribeWithPriority(666666,()=>{
			if(( pageName == "" ) || ( pageName == `dashboard` )){
				console.log(`Hardware Exit`);
				if(window.confirm("Do you want to exit App?")){
					navigator["app"].exitApp(); 
				}
			}else{
				console.log(`Hardware Back`);
				this.navController.back();
			}
		})
	}



}
