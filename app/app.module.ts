import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {EventAppComponent} from './event-app.component';
import {EventListComponent} from 'app/events/event-list.component';
import {EventAddressComponent} from 'app/events/event-address.component';

@NgModule({
  imports :[BrowserModule],
  declarations:[EventAppComponent,EventListComponent,EventAddressComponent],
  bootstrap:[EventAppComponent]
})

export class AppModule{

}
