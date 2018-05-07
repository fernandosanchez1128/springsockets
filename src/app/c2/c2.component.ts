import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat-service.service';
import { Subject } from 'rxjs/Subject';
import { share } from 'rxjs/operator/share';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit,OnDestroy {

  title = 'app';
  list : any [] = []
  private serverUrl = 'http://localhost:8080/socket'
  private stompClient;
  private connection;
  public messages: Subject<any>;
  ngOnInit(): void {
 
  }
  
  constructor(private chatService:ChatService) {
    this.connection =  this.chatService.sendmessages$.subscribe(
      message => { this.list.push(message);
    })
   /*  this.connection = this.chatService.observable.subscribe(
      message => { this.list.push(message);},
      error => {},

    ) */
   
  }

  
  send (){
    this.chatService.sendMessage("prueba2")
  }

  ngOnDestroy(): void {
    this.connection.unsubscribe()
  }

}
