/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "dashboard",
		pathMatch: "full"
	},
	{
		path: "about-us",
		loadChildren: () => import("./pages/about-us/about-us.module").then(m => m.AboutUsPageModule)
	},
	{
		path: "dashboard-detail",
		loadChildren: () => import("./pages/dashboard-detail/dashboard-detail.module").then(m => m.DashboardDetailPageModule)
	},
	{
		path: "dashboard-detail/:id",
		loadChildren: () => import("./pages/dashboard-detail/dashboard-detail.module").then(m => m.DashboardDetailPageModule)
	},
	{
		path: "dashboard-detail/:id/:url",
		loadChildren: () => import("./pages/dashboard-detail/dashboard-detail.module").then(m => m.DashboardDetailPageModule)
	},
	{
		path: "dashboard",
		loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardPageModule)
	},
	{
		path: "faqs",
		loadChildren: () => import("./pages/faqs/faqs.module").then(m => m.FaqsPageModule)
	},
	{
		path: "home",
		loadChildren: () => import("./pages/home/home.module").then(m => m.HomePageModule)
	},
	{
		path: "privacy-policy",
		loadChildren: () => import("./pages/privacy-policy/privacy-policy.module").then(m => m.PrivacyPolicyPageModule)
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
