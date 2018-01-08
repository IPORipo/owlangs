import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.scss'],

})
export class MakePostComponent implements OnInit {

  @Input() options;

  editorClass = 'editor-modal hidden';
  backgroundClass = 'overflow';

  constructor() {
    const that = this;
    document.addEventListener('keyup', function(e){
      if (e.keyCode === 27) {
            that.editorClass = 'editor-modal hidden';
            that.backgroundClass = 'overflow';
        }
    });
  }

  ngOnInit() {
  }
  animate(event) {
    console.log(this.options);
    this.editorClass = (this.editorClass === 'editor-modal hidden' ? 'editor-modal show' : 'editor-modal hidden');
    this.backgroundClass = (this.backgroundClass === 'overflow' ? 'overflow show' : 'overflow');
    return;
  }

  clickAction(option) {
    console.log(option);
  }
}
