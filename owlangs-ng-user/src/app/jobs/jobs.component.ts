import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})

export class JobsComponent implements OnInit {

  makePostOptions =  [
    'post a job'
  ];


  jobsBox;
  overflow;
  class = 'jobs-modal hide';


  constructor() {
    this.overflow = document.getElementsByClassName('overflow');
    const that = this;
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
         $( that.overflow ).removeClass('show');
          that.class = 'jobs-modal hide';
        }
    });
  }

  ngOnInit() {

  }

  showPopup() {

    this.class = (this.class === 'jobs-modal hide' ? 'jobs-modal show' : 'jobs-modal hide');
    $(this.overflow ).addClass('show');
    const that = this;
    $(this.overflow).on('click', function(e){
      $( that.overflow ).removeClass('show');
      that.class = 'jobs-modal hide';
    });
  }

}
