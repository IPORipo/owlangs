import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  makePostOptions =  [
    'post a word'
  ];
  constructor() { }

  ngOnInit() {
  }

}
