/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { Directive, HostListener, Input, ElementRef } from "@angular/core";
import { Platform } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { TextToSpeechAdvanced } from "@awesome-cordova-plugins/text-to-speech-advanced/ngx";

@Directive({
	selector: "[textToSpeech]"
})

export class TextToSpeechDirective {

	@Input() text: string;

	constructor( 
		private elementRef: ElementRef,
		private platform: Platform,
		private alertController: AlertController,
		private textToSpeechAdvanced: TextToSpeechAdvanced
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
			
		if (this.platform.is("cordova")){
			this.speakNow();
		}else{
			this.showAlert("Only support on real Device!");
		}

	}


	/**
	* speakNow()
	**/
	speakNow(){
		let speakText:string = this.text || "There is nothing I can read!" ;
		if (speakText == ""){
			speakText = "There is nothing I can read!";
		}
		this.textToSpeechAdvanced.speak(speakText).then(() => {
			console.log("Success");
		}).catch((reason: any) => {
			this.showAlert("Initialize text to speech, please wait a moment!");
		});
	}
	
	
	/**
	* showAlert($text)
	* @param string $text = "hi..."
	**/
	
	async showAlert(text:string){
		const alert = await this.alertController.create({
			header: "Text To Speech",
			subHeader: "Information!",
			message: text,
			buttons: ["OK"]
		});
		await alert.present();
	}


}
