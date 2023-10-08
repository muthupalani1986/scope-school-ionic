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
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { DashboardService } from "./../../services/dashboard/dashboard.service";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-dashboard-detail",
	templateUrl: "dashboard-detail.page.html",
	styleUrls: ["dashboard-detail.page.scss"],
})

export class DashboardDetailPage {

	//url parameter
	public id : string ;
	public url : string ;

	
	pageName:string = `dashboard-detail` ;
	
	/**
	* DashboardDetailPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		private storage: Storage,
		public dashboardService: DashboardService,
		public popoverController: PopoverController,
		public activatedRoute: ActivatedRoute,
		private globals: Globals
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#a60009");
		this.storageInit();
	
	
		this.id = this.activatedRoute.snapshot.paramMap.get("id");
		this.url = this.activatedRoute.snapshot.paramMap.get("url");

		console.log(`DashboardDetailPage`,`pageName`,this.pageName);
	}


	/**
	* DashboardDetailPage:storageInit();
	**/
	async storageInit(){
		await this.storage.create();
	}
	
	/**
	* DashboardDetailPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


		
	
	
	dashboard: Observable<any>;
	dataDashboard: any = {};
	
	/**
	* DashboardDetailPage:getJSON(url: string)
	**/
	public getItem(){
		this.dashboard = this.dashboardService.getItems();
		this.dashboard.subscribe(data => {
			for (let item of data){
				if( item.id.toString() === this.id.toString()){
					this.dataDashboard = item ;
				}
				//console.log(item.id.toString(),this.id.toString());
			};
		});
	}
	
	
	
	/**
	* DashboardDetailPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataDashboard = {};
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItem();
	}
	
	
	/**
	* DashboardDetailPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataDashboard = {};
		this.getItem();
	}
	




}
