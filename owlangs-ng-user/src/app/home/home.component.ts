import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  makePostOptions =  [
    'post a word',
    'post an excercise',
    'post a chalange',
    'post a job'
  ];

  constructor() {

  }

  ngOnInit() {

  }

}
