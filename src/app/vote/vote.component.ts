import { Component, OnInit, Input, Output } from '@angular/core';
import { Quote } from '../quote';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() quote:Quote;
  // @Output() updateVotes = new EventEmitter<number>();
  uVote = 0;
  dVote = 0;

  upVote(){
    this.uVote = this.uVote + 1;
  }
  downVote(){
    this.dVote = this.dVote + 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
