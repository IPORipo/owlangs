import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.scss'],
  animations: [
    trigger('showpopup', [
      state('small', style({
        visibility: 'hidden',
        transition: 'all 0.2s ease-in-out',
        zIndex: '9999',
        opacity: '0',
        transformOrigin: '50% 0%'
      })),
      state('large', style({
        visibility: 'visibility',
        position: 'relative',
        zIndex: '9999',
        opacity: '1'
      })),
      transition('small => large', animate('200ms ease-in'))
    ])
  ]
})
export class MakePostComponent implements OnInit {
  state = 'small';
  overflow;
  constructor() {
    this.overflow = document.getElementsByClassName('overflow');
    const that = this;
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
         $( that.overflow ).removeClass('show');
          that.state = 'small';
        }
    });

  }

  ngOnInit() {
  }
  animate(event) {

    this.state = (this.state === 'small' ? 'large' : 'small');
    const el = event.target;
    const editor = $(el).find('p');
    editor.attr('contenteditable', 'true');


    if ( this.state === 'large' ) {
      $(this.overflow).addClass('show');
    } else {
      $(this.overflow).removeClass('show');

    }


  }
}
