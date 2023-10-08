/**
* @author jenshansai <jenshansai@icloud.com>
* @copyright First App 2023
* @version 01.01.02
* @license licenses.txt
*
* @date 2023-10-07 05:58:01
**/

import { Injectable } from "@angular/core";

@Injectable()

export class AppSideMenus{
	items:any = [
    {
        "item_type": "inlink",
        "item_label": "Menu 1",
        "item_var": "dashboard",
        "item_link": "\/dashboard",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "color-filter-sharp",
        "item_color_icon_left": "secondary",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "title",
        "item_label": "Help",
        "item_var": "help",
        "item_link": "\/",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "help-circle",
        "item_color_icon_left": "undefined",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "playstore",
        "item_label": "Rate This App",
        "item_var": "rate_this_app",
        "item_link": "\/",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "logo-google-playstore",
        "item_color_icon_left": "primary",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "inlink",
        "item_label": "Privacy Policy",
        "item_var": "privacy_policy",
        "item_link": "\/privacy-policy",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "lock-closed-outline",
        "item_color_icon_left": "secondary",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "inlink",
        "item_label": "FAQs",
        "item_var": "faqs",
        "item_link": "\/faqs",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "help-circle",
        "item_color_icon_left": "secondary",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "inlink",
        "item_label": "About US",
        "item_var": "about_us",
        "item_link": "\/about-us",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "people-circle",
        "item_color_icon_left": "danger",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    }
] ;

}
