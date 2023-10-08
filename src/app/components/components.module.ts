/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { DirectivesModule } from "./../directives/directives.module";

import { ImageZoomComponent } from "./image-zoom/image-zoom.component";
import { PopoverComponent } from "./popover/popover.component";

@NgModule({
	declarations: [
		ImageZoomComponent,
		PopoverComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		DirectivesModule
	],
	exports: [
		ImageZoomComponent,
		PopoverComponent
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ComponentsModule {}
