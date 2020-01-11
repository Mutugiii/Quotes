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

  upVote(){
    this.quote.uVote = this.quote.uVote + 1;
  }
  downVote(){
    this.quote.dVote = this.quote.dVote + 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
