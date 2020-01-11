import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  @Input() quote: Quote
  @Output() toDelete = new EventEmitter<boolean>();

  quoteDelete(value: boolean){
    this.toDelete.emit(value)
  }
  constructor() { }

  ngOnInit() {
  }

}
