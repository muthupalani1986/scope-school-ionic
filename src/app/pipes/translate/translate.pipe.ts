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
 * Translate pipe
 * Just error prevention

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "translate",
})

export class TranslatePipe implements PipeTransform {

	constructor(
		
	){



	}

	transform(value:string): string{

			return value;


	}
}
