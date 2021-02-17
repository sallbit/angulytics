import { Injectable } from '@angular/core';

// declare let gtag:Function;
declare let gtag_report_conversion:Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public eventEmitter( 
    eventName: string, 
    eventCategory: string, 
    eventAction: string, 
    eventLabel: string = null,  
    eventValue: number = null ){ 
        //  gtag('event', eventName, { 
        //          eventCategory: eventCategory, 
        //          eventLabel: eventLabel, 
        //          eventAction: eventAction, 
        //          eventValue: eventValue
        //        })

        gtag_report_conversion()
    }
}
