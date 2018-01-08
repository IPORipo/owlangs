import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box.component';
import { ChatBoxService } from '../../app-services/chat-box.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ChatBoxComponent ],
  exports: [ ChatBoxComponent ],
  providers: [ ChatBoxService ]
})
export class ChatBoxModule { }
