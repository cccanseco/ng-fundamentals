import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ɵangular_packages_core_testing_testing_c } from '@angular/core/testing';

@Component({
    selector: 'event-thumbnail',
    template: `<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div></div>
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event?.time}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
      <span>Online URL: {{event?.onlineUrl}}</span>
    </div>  
   </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb;}
    `]
})
export class EventsThumbmailComponent {
    @Input() event: any;
    someProperty: any = "some value";

    logFoo() {
        console.log('foo');
    }

    getStartTimeClass() {
        // const isEarlyStart = this.event && this.event.time === '8:00 am';
        // return {green: isEarlyStart, bold: isEarlyStart};
        // if (this.event && this.event.time === '8:00 am')
        //     return { green: true, bold: true };
        // return '';
        if (this.event && this.event.time === '8:00 am')
            return "green bold";
        return '';
    }

    getStartTimeStyle(): any {
        // const isEarlyStart = this.event && this.event.time === '8:00 am';
        // return {green: isEarlyStart, bold: isEarlyStart};
        // if (this.event && this.event.time === '8:00 am')
        //     return { green: true, bold: true };
        // return '';
        if (this.event && this.event.time === '8:00 am')
            return { 'color': '#003300', 'font-weight': 'bold' };
        return {};
    }
}
