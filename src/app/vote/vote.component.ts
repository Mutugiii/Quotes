import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() quote:Quote;
  // @Output() updateUVote = new EventEmitter<number>();
  // @Output() updateDVote = new EventEmitter<number>();
  uVote = 0;
  dVote = 0;

  upVote(){
    this.uVote = this.uVote + 1;    
  }

  downVote(){
    this.dVote = this.dVote + 1;
  }

  preNum: number;
  lastNum: number;
  counter: number;
  updateUVote(){
    this.preNum= 0;
    this.lastNum= 0;
    for(this.counter=0; this.counter < this.uVote; this.counter++){
      this.lastNum = this.uVote;
      if(this.lastNum > this.preNum){
        this.preNum = this.lastNum
      }
      return this.preNum
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}

