import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatService } from './chat-service.service';
import { appRoutingModule } from './routing-module';
import { C2Component } from './c2/c2.component';
import { C1Component } from './c1/c1.component';
import { WebserviceService } from './webservice.service';
import { MixeComponent } from './mixe/mixe.component';

@NgModule({
  declarations: [
    AppComponent,
    C2Component,
    C1Component,
    MixeComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
  ],
  providers: [ChatService,WebserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
