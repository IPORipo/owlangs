import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBlockComponent } from './user-block.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [UserBlockComponent],
  exports: [UserBlockComponent],
})
export class UserBlockModule { }
