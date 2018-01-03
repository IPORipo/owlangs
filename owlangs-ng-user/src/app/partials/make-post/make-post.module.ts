import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakePostComponent } from './make-post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MakePostComponent],
  exports: [MakePostComponent],
})
export class MakePostModule { }
