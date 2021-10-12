import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]    
})
export class EventDetailsComponent {
    event: any;
    constructor (private serviceEvent: EventService, private route: ActivatedRoute){

    }
    ngOnInit(): void {
        console.log(this.route.snapshot.params['id']);
        this.event = this.serviceEvent.getEvent(<number> this.route.snapshot.params['id'] );

        
    }
}