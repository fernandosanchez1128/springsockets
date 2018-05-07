import { Injectable, OnInit } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WebserviceService } from './webservice.service';

@Injectable()
export class ChatService implements OnInit{

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  private url = 'http://localhost:8080/socket'
  private stompClient;
  public observable;
  public ws

  private sendmessages = new Subject<null>();
  sendmessages$ = this.sendmessages.asObservable();

	constructor(wsService: WebserviceService) {
    this.getMessages()
    this.observable.subscribe(message =>{
      console.log ("consuming")
      this.sendmessages.next(message)
    })
	}

  sendMessage(message) {
    this.stompClient.send("/app/send/message", {}, message);
    
  }

  private getMessages() {
    this.observable = new Observable(observer => {
     this.connect(observer)
      return () => {
        this.stompClient.disconnect()
      };
    })
    
  }


  connect (observer){
    console.log ("connecting")
      let connected = false;
        
        this.ws = new SockJS(this.url);
        this.stompClient = Stomp.over(this.ws);
        this.stompClient.connect({}, frame => {
          this.sync (observer)
        },() => {
          var millisecondsToWait = 5000;
          setTimeout(term => {
            this.connect(observer)
              // Whatever you want to do after the wait
          }, millisecondsToWait);
  
          
        });
    
      
  }
  sync(observer) {
    this.stompClient.subscribe("/chat", (message) => {
      if (message.body) {
        console.log ("getting")
        observer.next(message.body)
      }
    })
  }





 
}
