import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcercicesComponent } from './excercices.component';
import { HeaderModule } from '../partials/header/header.module';
import { UserBlockModule } from '../partials/user-block/user-block.module';
import { MakePostModule } from '../partials/make-post/make-post.module';
import { PostModule } from '../partials/post/post.module';
import { NavigationModule } from '../partials/navigation/navigation.module';
import { ChatBoxModule } from '../partials/chat-box/chat-box.module';


@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    UserBlockModule,
    MakePostModule,
    NavigationModule,
    ChatBoxModule,
    PostModule
  ],
  declarations: [ExcercicesComponent],
  exports: [ExcercicesComponent]
})
export class ExcercicesModule { }
