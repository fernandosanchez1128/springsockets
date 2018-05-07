import { Component, OnInit } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { ChatService } from './chat-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
/* 
  ngOnDestroy() {
    this.connection.unsubscribe();
  } */
}
