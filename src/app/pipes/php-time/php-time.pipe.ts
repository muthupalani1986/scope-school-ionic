/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { Pipe, PipeTransform } from "@angular/core";

/**
 * PhpTime pipe
 * Used to change the php format timestamp to JavaScript format

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "phpTime",
})

export class PhpTimePipe implements PipeTransform {

	constructor(
		
	){



	}

	transform(num:string): number{

			return parseInt(num) * 1000 ;

	}
}
