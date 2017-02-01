import { Component,Input} from '@angular/core';

@Component({
  selector: 'event-address',
  template : 'app/events/event-address.component.html',
})
export class EventAddressComponent {
  @Input() address:any
}
