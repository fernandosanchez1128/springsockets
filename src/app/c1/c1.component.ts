import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat-service.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  title = 'app';
  list : any [] = []
  private connection;
  ngOnInit(): void {
 
  }
  
  constructor(private chatService:ChatService) {
  this.connection =  this.chatService.sendmessages$.subscribe(
        message => { this.list.push(message);
      })
   /*  this.connection = this.chatService.observable.subscribe(
      message => { this.list.push(message);},
      error => {},
      share(),
 
    )*/
  }

  
  send (){
    this.chatService.sendMessage("prueba2")
  }

  ngOnDestroy(): void {
    this.connection.unsubscribe()
  }

}
