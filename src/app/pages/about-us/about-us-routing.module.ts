/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsPage } from "./about-us.page";

const routes: Routes = [
	{
		path: "",
		component: AboutUsPage,
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AboutUsPageRoutingModule {}
