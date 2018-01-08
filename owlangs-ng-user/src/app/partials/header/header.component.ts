import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatBoxService } from '../../app-services/chat-box.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor(private chatBox: ChatBoxService) { }

  ngOnInit() {

  }

  showMessages(e) {
    e.preventDefault();
    this.chatBox.chatBoxShow();
  }
}
