/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { throwError } from "rxjs";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { retry } from "rxjs/operators";
import { LoadingController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { HttpHeaders } from "@angular/common/http";


@Injectable({
	providedIn: "root"
})

export class DashboardService {
	
	constructor(
		public httpClient: HttpClient,
		public loadingController: LoadingController,
		public toastController: ToastController,
		public alertController: AlertController,
		private storage: Storage
	){

		// storage
		this.storageInit();


	}


	async storageInit(){
		await this.storage.create();
	}


	urlListItem : string = "https://conbig.com/php/restapi.php?api=animals";
	loading: any ;
	
	
	/**
	* getItems()
	**/
	getItems(): Observable<any>{
		let apiUrl = this.urlListItem;
		//console.log("apiUrl", apiUrl);
		this.presentLoading();
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/x-www-form-urlencoded"
			})
		}
		return this.httpClient.get(apiUrl,httpOptions)
			.pipe(
				map(results => {
					console.log(`services`,`getItems`,results);
					this.dismissLoading();
					this.showToast(`Successfully retrieved data!`);
					return results;
				}),
				catchError(err => {
					console.log(`services`,`getItems`,`catchError`, err);
					this.showAlert(err.statusText,err.name,`Failed to retrieve data from server!`);
					return throwError(err);
				}),
				catchError(err => {
					console.log(`services`,`getItems`,`rethrown`, err);
					return of([]);
				})
			);
	}
	
	
	/**
	* presentLoading()
	**/
	async presentLoading() {
		this.loading = await this.loadingController.create({
			message: `Please wait...!`,
			spinner: "crescent",
			duration: 2000
		});
		await this.loading.present();
	}
	
	
	/**
	* dismissLoading()
	**/
	async dismissLoading() {
		if(this.loading){
			await this.loading.dismiss();
		}
	}
	
	
	/**
	* showToast(message)
	**/
	async showToast(message:string){
		const toast = await this.toastController.create({
			message: message,
			position: "bottom",
			color: "dark",
			duration: 500
		});
		await toast.present();
	}
	
	
	/**
	* showAlert(header,subheader,message)
	**/
	async showAlert(header:string, subheader: string, message: string){
		const alert = await this.alertController.create({
			header: header,
			subHeader: subheader,
			message: message,
			buttons: ["Okey!"]
		});
		await alert.present();
	}
	
	



}

