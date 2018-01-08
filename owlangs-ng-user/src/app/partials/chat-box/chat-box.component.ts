import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'events';
import { ChatBoxService } from '../../app-services/chat-box.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  @Input() state;
  chatBoxClass = 'chat-box';

  constructor(private chatBox: ChatBoxService) {
  }


  ngOnInit() {
    this.chatBox.chatBoxState.subscribe(isOpen => {
      if (isOpen) {
         this.chatBoxClass = 'chat-box show';
      } else {
        this.chatBoxClass = 'chat-box';
      }
    });
  }

  closeChatBox() {
     this.chatBox.chatBoxShow();
  }
}
