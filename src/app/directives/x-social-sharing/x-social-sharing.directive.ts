/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { Directive, HostListener, Input, ElementRef } from "@angular/core";
import { SocialSharing } from "@awesome-cordova-plugins/social-sharing/ngx";
import { AlertController } from "@ionic/angular";

@Directive({
	selector: "[xSocialSharing]"
})

export class XSocialSharingDirective {

	@Input() message: string;
	@Input() subject: string;
	@Input() file: string;
	@Input() url: string;
	@Input() title: string;
	@Input() appPackageName: string;

	constructor( 
		private elementRef: ElementRef,
		private socialSharing: SocialSharing,
		private alertController: AlertController
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.socialShare();
	}


	
	
	/**
	* socialShare()
	**/
	
	private socialShare(){
		let message = this.message || `Share This`;
		let subject = this.subject || `First App`;
		let file = this.file || null;
		let url = this.url || null;
		let chooserTitle = this.title || null;
		
		let options = {
			message: message,
			subject: subject,
			files: [file],
			url: url,
			chooserTitle: chooserTitle,
		};
		
		this.socialSharing.shareWithOptions(options).then(()=>{
			
		}).catch(() =>{
			
		});
		
	}
	
	


}
