import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ChatBoxService {
  @Output() chatBoxState: EventEmitter<boolean> = new EventEmitter();
  isOpen = false;

  constructor() { }

  chatBoxShow() {
    this.isOpen = !this.isOpen;
    this.chatBoxState.emit(this.isOpen);
  }

}
