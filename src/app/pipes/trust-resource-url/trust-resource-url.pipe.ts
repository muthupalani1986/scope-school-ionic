/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { SafeResourceUrl } from "@angular/platform-browser";

/**
 * TrustResourceUrl pipe
 * sanitizing Resource URL

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "trustResourceUrl",
})

export class TrustResourceUrlPipe implements PipeTransform {

	constructor(
		public domSanitizer: DomSanitizer
	){



	}

	transform(value:any): SafeResourceUrl{

			return this.domSanitizer.bypassSecurityTrustResourceUrl(value);


	}
}
