/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { AppSideMenus } from "./app.side-menus";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage-angular";
import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";
import { StatusBar } from "@awesome-cordova-plugins/status-bar/ngx";
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";
import { Dialogs } from "@awesome-cordova-plugins/dialogs/ngx";
import { Device } from "@awesome-cordova-plugins/device/ngx";
import { Globals } from "./class/globals/globals";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { DirectivesModule } from "./directives/directives.module";
import { PipesModule } from "./pipes/pipes.module";
import { environment } from "./../../src/environments/environment";



@NgModule({
	declarations: [AppComponent],
	imports: [
		DirectivesModule,
		PipesModule,
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot({innerHTMLTemplatesEnabled:true}),
		IonicStorageModule.forRoot({ name : "FirstApp" }),
		AppRoutingModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		InAppBrowser,
		Dialogs,
		Device,
		AppSideMenus,
		Globals,
		{ provide: Window, useValue: window },
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
