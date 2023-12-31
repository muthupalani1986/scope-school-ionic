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
 * ReadMore pipe
 * Split text and give a trail

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "readMore",
})

export class ReadMorePipe implements PipeTransform {

	constructor(
		
	){



	}

	transform(text:string,args:number): string{

			let trail = '...';
			let limit = args > 0 ? args : 100;
			return text.length > limit ? text.substring(0, limit) + trail : text;


	}
}
