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
import { Observable } from "rxjs";
import { DashboardService } from "./../../services/dashboard/dashboard.service";
import { ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";
import { Platform } from "@ionic/angular";



@Component({
	selector: "app-dashboard",
	templateUrl: "dashboard.page.html",
	styleUrls: ["dashboard.page.scss"],
})

export class DashboardPage {

	// search query
	filterQuery: string = "";

	
	pageName:string = `dashboard` ;
	
	/**
	* DashboardPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		private storage: Storage,
		public dashboardService: DashboardService,
		public popoverController: PopoverController,
		public platform: Platform,
		private globals: Globals
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#a60009");
		this.storageInit();
	
	

		console.log(`DashboardPage`,`pageName`,this.pageName);
	}


	/**
	* DashboardPage:storageInit();
	**/
	async storageInit(){
		await this.storage.create();
	}
	
	/**
	* DashboardPage:showPopover()
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
	dataDashboard: any = [];
	filterDataDashboard: any = [];
	
	//for infinite-scroll
	lastId:number = 0;
	firstLoad:number = 20;
	perPage:number = 20;
	
	@ViewChild("IonInfiniteScroll",{static: false}) infiniteScroll: IonInfiniteScroll;
	
	
	
	/**
	* DashboardPage:getItems()
	**/
	getItems(){
		this.dashboard = this.dashboardService.getItems();
		this.dashboard.subscribe(data => {
			this.dataDashboard = data ;
			this.lastId = 0;
			let newData : any = [];
			for (let item of data) {
				if(this.lastId <= (this.firstLoad -1) ) {
					newData[this.lastId] = item;
					//console.log(this.lastId);
					this.lastId++;
				}
			}
			this.filterDataDashboard = newData;
		});
	}
	
	
	/**
	* DashboardPage:filterItems($event)
	* @param any $event
	*
	* @required for searchbar
	**/
	public filterItems(evt: any) {
		this.filterDataDashboard = this.dataDashboard;
		let filterVal = evt.target.value;
		if (filterVal && filterVal.trim() !== "") {
			this.filterDataDashboard = this.dataDashboard.filter((newItem) => {
				if(newItem.title){
					return newItem.title.toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
				}else{
					return [];
				}
			});
		}
	}
	
	
	/**
	* DashboardPage:loadMore(event)
	* @param event $event
	**/
	public loadMore(event){
		let newData : any = [];
		let nextPage:number = this.perPage + this.lastId;
		for (let item of this.dataDashboard){
			if(this.lastId < this.dataDashboard.length){
				if(this.lastId < nextPage){
					this.filterDataDashboard[this.lastId] = this.dataDashboard[this.lastId];
					//console.log("more data",this.lastId);
					this.lastId++;
				}
			}
		}
		setTimeout(() => {
			event.target.complete();
			if( this.lastId >= this.dataDashboard.length){
				event.target.enable = false;
			}
		}, 500);
	}
	
	
	/**
	* DashboardPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataDashboard = [] ;
		this.filterDataDashboard = [] ;
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItems();
	}
	
	
	/**
	* DashboardPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataDashboard = [] ;
		this.filterDataDashboard = [] ;
		this.getItems();
	}
	




}
